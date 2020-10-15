from flask import Flask,jsonify,request, make_response
import json
import pymongo 

app = Flask(__name__)

@app.route('/eventsOverview')
def eventsOverview():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    myEventCollection = mydb["event"]
    mySystemCollection = mydb["system"]
    myFindingCollection  = mydb["finding"]

    events_json = []

    # Event Overview Information 
    for e in myEventCollection.find():
        # Reset counters after every event
        findings_json = []
        systems_json = []

        #Get number of Findings
        for f in myFindingCollection.find({"Event":e['Event_name']}): 
            findings_json.append({"host_name":f["host_name"],"Event":f["Event"]})
        num_finds = len(findings_json)

        #Get number of systems 
        for s in mySystemCollection.find({"Event":e['Event_name']}): 
            systems_json.append({"System_info":s["System_Info"],"Event":s["Event"]})
        num_sys = len(systems_json)

        events_json.append({"name": e["Event_name"],"desc":e["Description"],"type":e["Type"],"version":e["Version"],"assess_date":e["Assessment_date"],"org_name": e["Org_name"],"event_class":e["Event_class"],"declass_date":e["Declass_date"],"customer":e["Customer_name"], "num_sys": num_sys,"num_findings" : num_finds,"prog":e['Progress']})
    print(events_json)
    return jsonify(events_json)


@app.route('/addevent',methods=['POST'])
def addEvent():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["event"]

    req = request.get_json()
    print(req)
    event = {"Event_name" : req['name'], "Description" : req['desc'], "Type" : req['type'], "Version" : req['vers'], "Assessment_date" : req['assess_date'], "Org_name" : req['org_name'], "Event_class" : req['event_class'], "Declass_date" : req['declass_date'], "Customer_name" : req['customer_name'], "Num_systems" : 13, "Num_findings" : 10, "Progress" : "33%"}
    mycollection.insert_one(event)

@app.route('/systems')
def systems():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["system"]
    system_json = []

    for e in mycollection.find():
        system_json.append({"sysInfo": e['System_Info'], "sysDesc": e['System_Description'],"sysLoc": e['System_Location'], "sysRouter": e['System_Router'], "sysSwitch": e['System_Switch'],  "sysRoom": e['System_Room'], "sysTestPlan": e['Test_Plan'], "Confidentiality": e['Confidentiality'], "Integrity": e['Integrity'], "Availability": e['Availability'], "num_task": e['Num_task'],"num_findings" : e['Num_findings'],"prog":e['Progress']})
    return jsonify(system_json)
   

@app.route('/addsystem',methods=['POST'])
def addSystems():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["system"]

    req = request.get_json()
    system = {"System_Info" : req['sysInfo'], "System_Description" : req['sysDesc'], "System_Location" : req['sysLoc'], "System_Router" : req['sysRouter'], "System_Switch" : req['sysSwitch'], "System_Room" : req['sysRoom'], "Test_Plan" : req['sysTestPlan'], "Confidentiality" : req['Confidentiality'], "Integrity" : req['Integrity'], "Availability" : req['Availability'], "Num_task" : 13, "Num_findings" : 10, "Progress" : "Assigned", "Event": "Event 1"}
    mycollection.insert_one(system)

@app.route('/addlog',methods=['POST'])
def addLog():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["logs"]

    req = request.get_json()
    log = {"Date_Time" : req['date'], "Action_Performed" : req['action'], "Analyst" : req['analyst']}
    mycollection.insert_one(log)
    