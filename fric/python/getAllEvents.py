from flask import Flask,jsonify,request, make_response
import json
import pymongo 

app = Flask(__name__)

@app.route('/events')
def events():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["event"]
    events_json = []

    for e in mycollection.find():
        events_json.append({"name": e['Event_name'], "num_sys": e['Num_systems'],"num_findings" : e['Num_findings'],"prog":e['Progress']})
    return jsonify(events_json)
   

@app.route('/addevent',methods=['POST'])
def addEvent():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["event"]

    req = request.get_json()
    event = {"Event_name" : req['name'], "Description" : req['desc'], "Type" : req['type'], "Version" : req['vers'], "Assessment_date" : req['assess_date'], "Org_name" : req['org_name'], "Event_class" : req['event_class'], "Declass_date" : req['declass_date'], "Customer_name" : req['customer_name'], "Num_systems" : 13, "Num_findings" : 10, "Progress" : "33%"}
    mycollection.insert_one(event)

@app.route('/systems')
def systems():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["system"]
    system_json = []

    for e in mycollection.find():
        system_json.append({"sysInfo": e['System_Info'], "num_task": e['Num_task'],"num_findings" : e['Num_findings'],"prog":e['Progress']})
    return jsonify(system_json)
   

@app.route('/addsystem',methods=['POST'])
def addSystems():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["system"]

    req = request.get_json()
    system = {"System_Info" : req['sysInfo'], "System_Description" : req['sysDesc'], "System_Location" : req['sysLoc'], "System_Router" : req['sysRouter'], "System_Switch" : req['sysSwitch'], "Test_Plan" : req['sysTestPlan'], "Confidentiality" : req['Confidentiality'], "Integrity" : req['Integrity'], "Availability" : req['Availability'], "Num_task" : 13, "Num_findings" : 10, "Progress" : "Assigned"}
    mycollection.insert_one(system)
    

