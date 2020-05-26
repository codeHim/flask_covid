from flask import Flask,render_template,request,redirect
import traceback
import requests
from bs4 import BeautifulSoup
from operator import itemgetter
import datetime
import json
import boto3
import urllib.request
import urllib.parse
from flask_cors import cross_origin,CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
cors = CORS(app)
csrf = CSRFProtect(app)
import os
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY


def showChartData():
    try:
        data = requests.get("https://api.covid19india.org/data.json")
        time_series_data = data.json()['cases_time_series']
        feb_c = 0
        feb_r = 0
        feb_d = 0
        mar_c = 0
        mar_r = 0
        mar_d = 0
        apr_c = 0
        apr_r = 0
        apr_d = 0
        may_c = 0
        may_r = 0
        may_d = 0
        final = {}
        for item in time_series_data:
            if item['date'].strip() == '29 February':
                feb_c = int(item['totalconfirmed'])
                feb_r = int(item['totalrecovered'])
                feb_d = int(item['totaldeceased'])
            elif item['date'].strip() == '31 March':
                mar_c = int(item['totalconfirmed']) - feb_c
                mar_r = int(item['totalrecovered']) - feb_r 
                mar_d = int(item['totaldeceased']) - feb_d
            elif item['date'].strip() == '30 April': 
                apr_c = int(item['totalconfirmed']) - mar_c
                apr_r = int(item['totalrecovered']) - mar_r 
                apr_d = int(item['totaldeceased']) - mar_d 
            else:
                if item['date'].strip() == '26 May':     #till latest date.
                    may_c = int(item['totalconfirmed']) - apr_c
                    may_r = int(item['totalrecovered']) - apr_r
                    may_d = int(item['totaldeceased']) - apr_d
        confirmed =[feb_c,mar_c,apr_c,may_c]
        recovered = [feb_r,mar_r,apr_r,may_r]
        deaths = [feb_d,mar_d,apr_d,may_d]
        final_dict = {
            'confirmed' : confirmed,
            'recovered' : recovered,
            'deaths' : deaths
        }
        return final_dict

    except Exception as e:
        print(traceback.print_exc())
        return redirect('/')


def sendSMS(phone,state,district):
    try:
        data = requests.get("https://api.covid19india.org/state_district_wise.json")
        sendData = data.json()[state]['districtData'][district]

        client = boto3.client(
        "sns",
        aws_access_key_id="Your_aws_access_key_id",
        aws_secret_access_key="Your_aws_secret_access_key",
        region_name="Your_aws_region_name"
        )

        client.publish(
            PhoneNumber="+91"+str(phone),
            Message="Covid Update covid19india.club :\n"+str(district)+"\nConfirmed : "+str(sendData['confirmed'])+"\n Deceased :"+str(sendData['deceased'])+"\n Recovered :"+str(sendData['recovered'])
        )
    except Exception as e:
        return redirect('/')



@app.route('/subscribe/',methods=['POST'])
def updateUser():
    try:
        name = request.form.get('name')
        state = request.form.get('state')
        district = request.form.get('district')
        contact = request.form.get('contact')
        if name != "" and state != "SELECT STATE" and district != None and contact != "":
            sendSMS(contact,state,district)
            return redirect('/')
        else:
            final = showChartData()
            final_data,total_data = getStateData()
            return render_template('index.html',data=final_data,updateUser=updateUser,total=total_data,confirm=final['confirmed'],recover=final['recovered'],death=final['deaths'],error=1)
    except Exception as e:
        redirect('/')




@csrf.exempt
@app.route('/')
def index():
    try:
        final = showChartData()
        final_data,total_data = getStateData()
        return render_template('index.html',data=final_data,updateUser=updateUser,total=total_data,confirm=final['confirmed'],recover=final['recovered'],death=final['deaths'],error=0)
    except Exception as e:
        return "We are under maintainance. The site will be back soon."


def getStateData():
    try:
        stateData = []
        total = {}
        data = requests.get("https://api.covid19india.org/data.json")
        stateList = data.json()['statewise']
        for state in stateList:
            if state['state'] == 'Total':
                total['confirmed'] = int(state['confirmed'])
                total['recovered'] = int(state['recovered'])
                total['active'] = int(state['active'])
                total['state'] = state['state']
                total['deaths'] = state['deaths']
            else:
                temp = {}
                temp['confirmed'] = int(state['confirmed'])
                temp['recovered'] = int(state['recovered'])
                temp['deaths'] = int(state['deaths'])
                temp['state'] = state['state']
                stateData.append(temp)

        sortedList = sorted(stateData,key=itemgetter('confirmed'),reverse=True)
        return sortedList,total
    except Exception as e:
        return "redirect('/')"

