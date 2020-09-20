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

import datetime
from dateutil import parser
import calendar

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
        time_series_data.sort(key = lambda x: parser.parse(x['date'].strip()))

        mon_c = 0
        mon_r = 0
        mon_d = 0
        confirmed = []
        recovered = []
        deaths = []
        months = []
        date_list = []
        for item in time_series_data:
            date_list.append(parser.parse(item['date'].strip()))

        month_last_dates = [datetime.datetime(date.year, date.month,
        calendar.monthrange(date.year, date.month)[1]) for date in date_list]    
        
        month_last_dates = set(month_last_dates)
        chart_data = list(filter(lambda item: parser.parse(item['date'].strip()) in month_last_dates,time_series_data))
        for item in chart_data:
            mon_c = int(item['totalconfirmed'])
            mon_r = int(item['totalrecovered'])
            mon_d = int(item['totaldeceased'])
            confirmed.append(mon_c)
            recovered.append(mon_r)
            deaths.append(mon_d)
            months.append(item['date'].strip().split()[1])

        final_dict = {
            'confirmed' : confirmed,
            'recovered' : recovered,
            'deaths' : deaths,
            'months' : months
        }
        return final_dict

    except:
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
        print(final['months'])
        return render_template('index.html',data=final_data,updateUser=updateUser,total=total_data,confirm=final['confirmed'],recover=final['recovered'],death=final['deaths'],months=final['months'],error=0)
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
