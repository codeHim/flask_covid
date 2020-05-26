var states = ["SELECT STATE", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh","Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram","Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

$(function () {
    var options = '';
    for (var i = 0; i < states.length; i++) {
        options += '<option value="' + states[i] + '">' + states[i] + '</option>';
    }
    $('#selectedState').html(options);
});
function selectDistrict($val) {
    if ($val == 'SELECT STATE') {
        var options = '';
        $('#districtList').html(options);
    }
    if ($val == 'Andhra Pradesh') {
        var andhra = ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "S.P.S. Nellore",
            "Vishakhapatnam","West Godavari", "Y.S.R. Kadapa"];
        $(function () {
            var options = '';
            for (var i = 0; i < andhra.length; i++) {
                options += '<option value="' + andhra[i] + '">' + andhra[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Arunachal Pradesh') {
        var ap = ["Lohit"];
        $(function () {
            var options = '';
            for (var i = 0; i < ap.length; i++) {
                options += '<option value="' + ap[i] + '">' + ap[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Assam') {
        var assam = ["Bongaigaon", "Cachar","Dhubri", "Goalpara", "Golaghat", "Hailakandi",
            "Kamrup", "Kamrup Metropolitan","Karimganj", "Lakhimpur", "Morigaon","Nalbari", "South Salmara Mankachar"];
        $(function () {
            var options = '';
            for (var i = 0; i < assam.length; i++) {
                options += '<option value="' + assam[i] + '">' + assam[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Bihar') {
        var bihar = ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga","East Champaran", "Gaya", "Gopalganj", "Jehanabad", "Kaimur",
            "Katihar","Lakhisarai", "Madhepura", "Madhubani", "Munger", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas",
            "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan","Vaishali", "West Champaran"];
        $(function () {
            var options = '';
            for (var i = 0; i < bihar.length; i++) {
                options += '<option value="' + bihar[i] + '">' + bihar[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Chhattisgarh') {
        var Chhattisgarh = ["Bilaspur","Durg","Kabeerdham", "Korba",
            "Rajnandgaon", "Raipur", "Surajpur"];
        $(function () {
            var options = '';
            for (var i = 0; i < Chhattisgarh.length; i++) {
                options += '<option value="' + Chhattisgarh[i] + '">' + Chhattisgarh[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Delhi') {
        var delhi = ["Central Delhi", "New Delhi", "North Delhi", "East Delhi","West Delhi"];
        $(function () {
            var options = '';
            for (var i = 0; i < delhi.length; i++) {
                options += '<option value="' + delhi[i] + '">' + delhi[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Goa') {
        var goa = ["North Goa","South Goa"];
        $(function () {
            var options = '';
            for (var i = 0; i < goa.length; i++) {
                options += '<option value="' + goa[i] + '">' + goa[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Gujarat') {
        var gujarat = ["Ahmedabad", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur","Devbhumi Dwarka","Dahod","Dang","Gandhinagar","Gir Somnath", "Jamnagar",
            "Kutch", "Kheda", "Mehsana","Mahisagar","Morbi", "Narmada", "Navsari", "Patan", "Panchmahal", "Porbandar", "Rajkot", "Sabarkantha", "Surendranagar", "Surat", "Tapi", "Vadodara", "Valsad"];
        $(function () {
            var options = '';
            for (var i = 0; i < gujarat.length; i++) {
                options += '<option value="' + gujarat[i] + '">' + gujarat[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Haryana') {
        var haryana = ["Ambala", "Bhiwani","Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Karnal", "Kaithal",
            "Kurukshetra","Nuh","Palwal", "Panchkula", "Panipat", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"];
        $(function () {
            var options = '';
            for (var i = 0; i < haryana.length; i++) {
                options += '<option value="' + haryana[i] + '">' + haryana[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }


    if ($val == 'Himachal Pradesh') {
        var himachal = ["Chamba","Hamirpur", "Kangra","Sirmaur", "Solan", "Una"];
        $(function () {
            var options = '';
            for (var i = 0; i < himachal.length; i++) {
                options += '<option value="' + himachal[i] + '">' + himachal[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Jammu and Kashmir') {
        var jammu = ["Anantnag","Budgam","Bandipora","Baramulla","Ganderbal","Jammu", "Kathua","Kishtwar","Kulgam","Kupwara","Pulwama","Ramban","Reasi","Samba","Shopiyan","Rajouri", "Srinagar","Udhampur"];
        $(function () {
            var options = '';
            for (var i = 0; i < jammu.length; i++) {
                options += '<option value="' + jammu[i] + '">' + jammu[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Jharkhand') {
        var jharkhand = ["Bokaro","Deoghar", "Dhanbad", "Garhwa", "Giridih", "Godda","Hazaribag", "Jamtara","Koderma","Palamu",
           "Ranchi","Simdega"];
        $(function () {
            var options = '';
            for (var i = 0; i < jharkhand.length; i++) {
                options += '<option value="' + jharkhand[i] + '">' + jharkhand[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Karnataka') {
        var karnataka = ["Bagalkote","Ballari","Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Belgaum","Bidar","Chikkaballapura",
            "Chitradurga", "Davanagere", "Dharwad", "Dakshina Kannada", "Gadag","Haveri", "Kodagu",
            "Kolar","Mandya", "Mysuru", "Tumakuru", "Udupi", "Uttara Kannada","Vijayapura"];
        $(function () {
            var options = '';
            for (var i = 0; i < karnataka.length; i++) {
                options += '<option value="' + karnataka[i] + '">' + karnataka[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Kerala') {
        var kerala = ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thrissur", "Thiruvananthapuram", "Wayanad"];
        $(function () {
            var options = '';
            for (var i = 0; i < kerala.length; i++) {
                options += '<option value="' + kerala[i] + '">' + kerala[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Madhya Pradesh') {
        var mp = ["Agar Malwa","Alirajpur", "Anuppur", "Ashoknagar","Barwani", "Betul", "Bhopal", "Burhanpur", "Chhindwara", "Dewas", "Dhar", "Dindori","Khandwa","Gwalior", "Harda","Hoshangabad",
            "Indore", "Jabalpur", "Mandsaur", "Morena", "Niwari","Panna", "Raisen", "Ratlam",
            "Rewa", "Sagar","Shajapur", "Shahdol","Sheopur","Shivpuri","Tikamgarh","Ujjain","Vidisha","Khargone"];
        $(function () {
            var options = '';
            for (var i = 0; i < mp.length; i++) {
                options += '<option value="' + mp[i] + '">' + mp[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Maharashtra') {
        var maharashtra = ["Ahmednagar", "Akola", "Amaravati", "Aurangabad", "Bhandara", "Beed","Buldhana","Chandrapur","Dhule", "Gondia","Hingoli", "Jalgaon",
            "Jalna", "Kolhapur","Latur", "Lonavale",
            "Mumbai", "Nagpur","Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar",
            "Parbhani","Pune","Raigad", "Ratnagiri","Sangli","Satara","Sindhudurg", "Solapur","Thane", "Washim","Yavatmal"];
        $(function () {
            var options = '';
            for (var i = 0; i < maharashtra.length; i++) {
                options += '<option value="' + maharashtra[i] + '">' + maharashtra[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Manipur') {
        var manipur = ["Imphal East","Imphal West"];
        $(function () {
            var options = '';
            for (var i = 0; i < manipur.length; i++) {
                options += '<option value="' + manipur[i] + '">' + manipur[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Meghalaya') {
        var meghalaya = ["East Khasi hills"];
        $(function () {
            var options = '';
            for (var i = 0; i < meghalaya.length; i++) {
                options += '<option value="' + meghalaya[i] + '">' + meghalaya[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Mizoram') {
        var mizoram = ["Aizawl"];
        $(function () {
            var options = '';
            for (var i = 0; i < mizoram.length; i++) {
                options += '<option value="' + mizoram[i] + '">' + mizoram[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Odisha') {
        var orissa = ["Balangir","Balasore","Bhadrak","Cuttack","Bhubaneswar", "Chandbali", "Gopalpur", "Jeypore", "Paradip Garh", "Puri", "Rourkela"];
        $(function () {
            var options = '';
            for (var i = 0; i < orissa.length; i++) {
                options += '<option value="' + orissa[i] + '">' + orissa[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Puducherry') {
        var puducherry = ["Mahe", "Pondicherry"];
        $(function () {
            var options = '';
            for (var i = 0; i < puducherry.length; i++) {
                options += '<option value="' + puducherry[i] + '">' + puducherry[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Punjab') {
        var punjab = ["Amritsar", "Barnala", "Bathinda", "Ferozepur", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Sri Muktsar Sahib", "Pathankot",
            "Patiala", "Rupnagar", "S.A.S. Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Tarn Taran"];
        $(function () {
            var options = '';
            for (var i = 0; i < punjab.length; i++) {
                options += '<option value="' + punjab[i] + '">' + napunjabgaland[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

    if ($val == 'Rajasthan') {
        var rajasthan = ["Ajmer","Alwar", "Banswara", "Baran","Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur", 
             "Jaisalmer", "Jodhpur","Jaisalmer", "Jhalawar","Jhunjhunu","Karauli", "Kota", "Nagaur", "Pali","Pratapgarh","Rajsamand", "Sawai Madhopur", "Sikar","Tonk", "Udaipur"];
        $(function () {
            var options = '';
            for (var i = 0; i < rajasthan.length; i++) {
                options += '<option value="' + rajasthan[i] + '">' + rajasthan[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }


    if ($val == 'Tamil Nadu') {
        var tn = ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kancheepuram", "Kanyakumari", "Karur","Madurai","Nagapattinam","Namakkal","Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thiruvallur","Tiruppur",
            "Thiruvarur","Tiruchirapalli", "Theni", "Tirunelveli", "Thanjavur", "Thoothukudi", "Thiruvallur", "Tiruvannamalai", "Vellore", "Viluppuram", "Virudhunagar","Tenkasi","Chengalpattu","Ranipet","kallakurichi","Tirupathur"];
        $(function () {
            var options = '';
            for (var i = 0; i < tn.length; i++) {
                options += '<option value="' + tn[i] + '">' + tn[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }


    if ($val == 'Telangana') {
        var telangana = ["Adilabad", "Bhadradri Kothagudem", "Hyderabad","Jagtial","Jangaon","Jayashankar Bhupalapally", "Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad", "Mahabubnagar","Mancherial", "Medak","Medchal Malkajgiri","Mulugu","Nagarkurnool", "Nalgonda","Narayanpet","Nirmal", "Nizamabad", "Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Warangal Urban"];
        $(function () {
            var options = '';
            for (var i = 0; i < telangana.length; i++) {
                options += '<option value="' + telangana[i] + '">' + telangana[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }


    if ($val == 'Tripura') {
        var tripura = ["Dhalai","Gomati","North Tripura"];
        $(function () {
            var options = '';
            for (var i = 0; i < tripura.length; i++) {
                options += '<option value="' + tripura[i] + '">' + tripura[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }


    if ($val == 'Uttar Pradesh') {
        var up = ["Agra","Aligarh","Amroha", "Auraiya","Ayodhya","Azamgarh","Baghpat","Bahraich","Balrampur","Banda", "Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Badaun","Bulandshahr","Deoria", "Etah", "Etawah","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda", "Gorakhpur",
            "Hapur","Hardoi","Hathras","Jalaun", "Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj", "Kaushambi","Lakhimpur Kheri","Lucknow","Mahoba","Maharajganj", "Meerut","Mainpuri","Mathura","Mau","Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh",
            "Prayagraj", "Rae Bareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shrawasti","Siddharthnagar","Sitapur","Sultanpur","Unnao", "Varanasi"];
        $(function () {
            var options = '';
            for (var i = 0; i < up.length; i++) {
                options += '<option value="' + up[i] + '">' + up[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }


    if ($val == 'Uttarakhand') {
        var uttarakhand = ["Almora","Dehradun", "Haridwar", 
            "Nainital", "Pantnagar", "Pauri Garhwal", "Udham Singh Nagar"];
        $(function () {
            var options = '';
            for (var i = 0; i < uttarakhand.length; i++) {
                options += '<option value="' + uttarakhand[i] + '">' + uttarakhand[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }


    if ($val == 'West Bengal') {
        var wb = ["Darjeeling", "Hooghly", "Howrah",
            "Jalpaiguri", "Kalimpong","Kolkata", "Murshidabad", "Nadia", "North 24 Parganas","Paschim Bardhaman","Purba Bardhaman","Purba Medinipur", "South 24 Parganas"];
        $(function () {
            var options = '';
            for (var i = 0; i < wb.length; i++) {
                options += '<option value="' + wb[i] + '">' + wb[i] + '</option>';
            }
            $('#districtList').html(options);
        });
    }

}