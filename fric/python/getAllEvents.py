from flask import Flask, jsonify, request, make_response
import json
import pymongo

app = Flask(__name__)


@app.route('/eventsOverview')
def eventsOverview():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    myEventCollection = mydb["event"]
    mySystemCollection = mydb["system"]
    myFindingCollection = mydb["finding"]

    events_json = []

    findings_json = []
    # Get number of Findings
    for f in myFindingCollection.find():
        findings_json.append(
            {"findingID": f["Finding_ID"], "hostName": f["Host_Name"]})
    num_finds = len(findings_json)

    systems_json = []
    # Get number of systems
    for s in mySystemCollection.find():
        systems_json.append(
            {"sysInfo": s["System_Info"], "sysDesc": s["System_Description"]})
    num_sys = len(systems_json)

    # Event Overview Information
    for e in myEventCollection.find():
        events_json.append({"name": e["Event_name"], "desc": e["Description"], "type": e["Type"], "version": e["Version"], "assess_date": e["Assessment_date"], "org_name": e["Org_name"],
                            "event_class": e["Event_class"], "declass_date": e["Declass_date"], "customer": e["Customer_name"], "num_sys": num_sys, "num_findings": num_finds, "prog": e['Progress']})

    return jsonify(events_json)


@app.route('/addevent', methods=['POST'])
def addEvent():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["event"]

    req = request.get_json()

    event = {"Event_name": req['name'], "Description": req['desc'], "Type": req['type'], "Version": req['vers'], "Assessment_date": req['assess_date'], "Org_name": req['org_name'],
             "Event_class": req['event_class'], "Declass_date": req['declass_date'], "Customer_name": req['customer_name'], "Num_systems": 13, "Num_findings": 10, "Progress": "33%"}
    mycollection.insert_one(event)


@app.route('/getsystem')
def systems():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mySystemCollection = mydb["system"]
    myFindingCollection = mydb["finding"]
    myTaskCollection = mydb["task"]
    system_json = []
    findings_json = []
    for f in myFindingCollection.find():

        findings_json.append(
            {"findingID": f["Finding_ID"], "hostName": f["Host_Name"]})
        num_finds = len(findings_json)
    task_json = []
    for f in myTaskCollection.find():

        task_json.append(
            {"taskTitle": f["Task_title"], "taskDescription": f["Task_Description"]})
    num_tasks = len(task_json)

    for e in mySystemCollection.find():

        task_json = []

        system_json.append({"sysInfo": e['System_Info'], "sysDesc": e['System_Description'], "sysLoc": e['System_Location'], "sysRouter": e['System_Router'], "sysSwitch": e['System_Switch'],  "sysRoom": e['System_Room'],
                            "sysTestPlan": e['Test_Plan'], "Confidentiality": e['Confidentiality'], "Integrity": e['Integrity'], "Availability": e['Availability'], "num_task": num_tasks, "num_findings": num_finds, "prog": e['Progress']})
    return jsonify(system_json)


@app.route('/addsystem', methods=['POST'])
def addSystems():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["system"]

    req = request.get_json()
    system = {"System_Info": req['sysInfo'], "System_Description": req['sysDesc'], "System_Location": req['sysLoc'], "System_Router": req['sysRouter'], "System_Switch": req['sysSwitch'], "System_Room": req['sysRoom'],
              "Test_Plan": req['sysTestPlan'], "Confidentiality": req['Confidentiality'], "Integrity": req['Integrity'], "Availability": req['Availability'], "Num_Task": 13, "Num_Findings": 10, "Progress": "Assigned", "Event": "Event 1"}
    mycollection.insert_one(system)


@app.route('/findings')  # path used in JS to call this
def findings():
    myclient = pymongo.MongoClient(
        "mongodb://localhost:27017/")  # Connect to the DB Client
    mydb = myclient["FRIC"]  # Database name
    mycollection = mydb["finding"]  # Collection Name
    finding_json = []

    # Find all data inside the collection finding and append as necessary
    for e in mycollection.find():
        # Format => How to Access field, Name inside the collection
        finding_json.append(
            {"findingID": e['Finding_ID'], "hostName": e["Host_Name"]})
    return jsonify(finding_json)  # return what was found in the collection


@app.route('/addfinding', methods=['POST'])
def addFinding():
    myclient = pymongo.MongoClient(
        "mongodb://localhost:27017/")  # Connect to the DB Client
    mydb = myclient["FRIC"]  # Database name
    mycollection = mydb["finding"]  # Collection Name

    req = request.get_json()  # Assign the information
    # Format => Name inside the collection, How to Access field
    finding = {"Finding_ID": req['findingID'], "Host_Name": req['hostName']}
    mycollection.insert_one(finding)  # Send information to collection


@app.route('/subtasks')
def subtasks():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["subtask"]
    myFindingCollection = mydb["finding"]
    subtask_json = []

    findings_json = []
    # Get number of Findings
    for f in myFindingCollection.find():
        findings_json.append(
            {"findingID": f["Finding_ID"], "hostName": f["Host_Name"]})
    num_finds = len(findings_json)

    for e in mycollection.find():
        subtask_json.append({
            "subtaskTitle": e['Subtask_Title'],
            "subtaskDescription": e['Subtask_Description'],
            "subtaskProgress": e['Subtask_Progress'],
            "subtaskDueDate": e['Subtask_Due_Date'],
            "analysts": e['Analysts'],
            "collaborators": e['Collaborators'],
            "relatedTask": e['Related_Task'],
            "subtasks": e['Subtasks'],
            "attachments": e['Attachments'],
            "numFindings": num_finds,
            "analyst": e['Analyst'],
            "task": e['Task']
        })
    return jsonify(subtask_json)


@app.route('/addsubtask', methods=['POST'])
def addSubtasks():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["subtask"]
    req = request.get_json()
    subtask = {
        "Subtask_Title": req['subtaskTitle'],
        "Subtask_Description": req['subtaskDescription'],
        "Subtask_Progress": req['subtaskProgress'],
        "Subtask_Due_Date": req['subtaskDueDate'],
        "Analysts": req['analysts'],
        "Collaborators": req['collaborators'],
        "Related_Task": req['relatedTask'],
        "Subtasks": req['subtasks'],
        "Attachments": req['attachments'],
        "Num_Findings": 0,
        "Analyst": "Analyst 0",
        "Task": "Task 0"
    }
    mycollection.insert_one(subtask)


@app.route('/tasks')
def tasks():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["task"]
    myFindingCollection = mydb["finding"]
    mySubtaskCollection = mydb["subtask"]
    task_json = []

    findings_json = []
    # Get number of Findings
    for f in myFindingCollection.find():
        findings_json.append(
            {"findingID": f["Finding_ID"], "hostName": f["Host_Name"]})
    num_finds = len(findings_json)

    subtask_json = []
    # Get number of systems
    for s in mySubtaskCollection.find():
        subtask_json.append(
            {"subtaskTitle": s["Subtask_Title"], "subtaskDescription": s["Subtask_Description"]})
    num_subtask = len(subtask_json)

    for e in mycollection.find():

        task_json.append({
            "taskTitle": e['Task_title'],
            "taskDescription": e['Task_Description'],
            "system": e['System'],
            "taskPriority": e['Task_Priority'],
            "taskProgress": e['Task_Progress'],
            "taskDueDate": e['Task_Due_Date'],
            "taskAnalysts": e['Task_Analysts'],
            "taskCollaborators": e['Task_Collaborators'],
            "relatedTasks": e['Related_Tasks'],
            "attachments": e['Attachments'],
            "num_subtask": num_subtask,
            "num_finding": num_finds
        })
    return jsonify(task_json)


@app.route('/addtask', methods=['POST'])
def addTasks():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["task"]
    req = request.get_json()
    task = {
        "Task_title": req['taskTitle'],
        "Task_Description": req['taskDescription'],
        "System": req['system'],
        "Task_Priority": req['taskPriority'],
        "Task_Progress": req['taskProgress'],
        "Task_Due_Date": req['taskDueDate'],
        "Task_Analysts": req['taskAnalysts'],
        "Task_Collaborators": req['taskCollaborators'],
        "Related_Tasks": req['relatedTasks'],
        "Attachments": req['attachments'],
        "Num_subtask": 0,
        "Num_finding": 13
    }
    mycollection.insert_one(task)


@app.route('/addlog', methods=['POST'])
def addLog():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["logs"]

    req = request.get_json()
    log = {"Date_Time": req['date'],
           "Action_Performed": req['action'], "Analyst": req['analyst']}
    mycollection.insert_one(log)
