import json
import pymongo
import random
from flask import Flask, jsonify, request, make_response


app = Flask(__name__)
#TO:DO Dont allow empty event variables

# @app.route('/analystInEvent', methods=['POST'])
# def analystList():
#     myclient = pymongo.MongoClient("mongodb://localhost:27017/")
#     mydb = myclient["FRIC"]
#     analysts = []
#     myAnalystCollection = mydb["event_analyst"]
#     req = request.get_json()
#     for a in myAnalystCollection.find({"event_id":req["event_id"]}):
#         analysts.append({"analyst": a["analyst"],"event":a["event_id"]})
#     return jsonify(analysts)

#Given Analyst return progress # tasks completed / # of tasks 
def calculateProgress(analyst): 
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    myTaskCollection = mydb["task"]
    tasks = []
    tasks_completed = 0 
    for t in myTaskCollection.find({"Task_Analysts": analyst}):
        tasks.append(t)
        if(t["Task_Progress"]== "complete"):
            tasks_completed += 1
    if(len(tasks) == 0 ):
        return 0
    return tasks_completed / len(tasks) 
    

# Given event, return analsysts from that event # 
@app.route('/analystsInEvent',methods=['POST'])
def analystList():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    analysts = []
    myAnalystCollection = mydb["event_analyst"]
    req = request.get_json()
    for a in myAnalystCollection.find({"event_id": req[0]}): # Using '0' bc there is only one POST variable # 
        analysts.append({"analyst": a["analyst"],"event":a["event_id"],"is_lead": a["is_lead"], "progress": calculateProgress(a["analyst"])})
    return jsonify(analysts)


# Returns all analysts #
@app.route('/analysts')
def analysts():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    analysts = []
    myAnalystCollection = mydb["analyst"]

    for a in myAnalystCollection.find():
        analysts.append({"isLead": a["isLead"],"initials":a["initials"]})
    return jsonify(analysts)

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

        events_json.append({"id": e["id"],"name": e["Event_name"], "desc": e["Description"], "type": e["Type"], "version": e["Version"], "assess_date": e["Assessment_date"], "org_name": e["Org_name"],"event_class": e["Event_class"], "declass_date": e["Declass_date"], "customer": e["Customer_name"], "num_sys": num_sys, "num_findings": num_finds, "prog": e['Progress'],"created_by": e["Created_By"]})

    return jsonify(events_json)

#TO:DO Event ID Increment
@app.route('/addevent', methods=['POST'])
def addEvent():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["event"]

    req = request.get_json()
    event = {"id":str(random.randint(1,30)),"Event_name": req['name'], "Description": req['desc'], "Type": req['type'], "Version": req['vers'], "Assessment_date": req['assess_date'], "Org_name": req['org_name'],
             "Event_class": req['event_class'], "Declass_date": req['declass_date'], "Customer_name": req['customer_name'], "Created_By": req['created_by'],"Num_systems": 13, "Num_findings": 10, "Progress": "33%"}
    
    mycollection.insert_one(event)
    return



@app.route('/getprogress')
def getProgress():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mySystemCollection = mydb["task"]
    task_progress = []
    for e in mySystemCollection.find():
        task_progress.append({"taskProgress": e['Task_Progress']})
    return jsonify(task_progress)

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

@app.route('/editevent',methods=['POST'])
def editEvent():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["event"]
    
    req = request.get_json()
    query = {"id":req["id"]}
    event = {"$set" : {"Event_name": req['name'], "Description": req['desc'], "Type": req['type'], "Version": req['vers'], "Assessment_date": req['assess_date'], "Org_name": req['org_name'],
             "Event_class": req['event_class'], "Declass_date": req['declass_date'], "Customer_name": req['customer_name'],"Created_By": req['created_by'], "Num_systems": 13, "Num_findings": 10, "Progress": "33%"}}
    mycollection.update_one(query,event)
    return jsonify(event)

@app.route('/editsystem',methods=['POST'])
def editSystem():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["system"]
    
    req = request.get_json()
    query = {"id":req["id"]}
    system = {"System_Info": req['sysInfo'], "System_Description": req['sysDesc'], "System_Location": req['sysLoc'], "System_Router": req['sysRouter'], "System_Switch": req['sysSwitch'], "System_Room": req['sysRoom'],
              "Test_Plan": req['sysTestPlan'], "Confidentiality": req['Confidentiality'], "Integrity": req['Integrity'], "Availability": req['Availability'], "Num_Task": 13, "Num_Findings": 10, "Progress": "Assigned", "Event": "Event 1"}
    mycollection.update_one(query,system)
    return jsonify(system)

@app.route('/findings')  # path used in JS to call this
def findings():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient['FRIC']  # Database name
    mycollection = mydb['finding']  # Collection Name
    
    finding_json = []
    active_tasks = [] 

    for e in mycollection.distinct("Task_title"):
        active_tasks.append(e)

    testing = active_tasks

    for e in mycollection.find():
        finding_json.append({
            "id": e['id'],
            "findingID": e['Finding_ID'], 
            "hostName": e['Host_Name'],
            "ip_port" : e['IP_Port'],
            "description": e['Description'], 
            "longDescription": e['Long_Description'],
            "findingStatus" : e['Finding_Status'],
            "findingType": e['Finding_Type'], 
            "findingClassification": e['Finding_Classification'],
            "findingSystem" : e['Finding_System'],
            "findingTask" : e['Finding_Task'],
            "findingSubtask": e['Finding_Subtask'], 
            "relatedFindings": e['Related_Findings'],
            "findingConfidentiality" : e['Finding_Confidentiality'],
            "findingIntegrity" : e['Finding_Integrity'],
            "findingAvailability": e['Finding_Availability'], 
            "findingAnalyst": e['Finding_Analyst'],
            "findingCollaborators" : e['Finding_Collaborators'],
            "findingPosture" : e['Finding_Posture'],
            "mitigationDesc": e['Mitigation_Desc'], 
            "mitigationLongDesc": e['Mitigation_Long_Desc'],
            "threatRelevence" : e['Threat_Relevence'],
            "countermeasure" : e['Countermeasure'],
            "impactDesc": e['Impact_Desc'], 
            "findingImpact": e['Finding_Impact'],
            "severityCategoryScore" : e['Severity_Score'],
            "vulnerabilityScore" : e['Vulnerability_Score'],
            "quantitativeScore": e['Quantitative_Score'], 
            "findingRisk": e['Finding_Risk'],
            "findingLikelihood" : e['Finding_Likelihood'],
            "findingCFIS" : e['Finding_CFIS'],
            "findingIFIS": e['Finding_IFIS'], 
            "findingAFIS": e['Finding_AFIS'],
            "impactScore" : e['Impact_Score'],
            "findingFiles": e['Finding_Files']
            })
    return jsonify(finding_json)  # return what was found in the collection

@app.route('/addfinding', methods=['POST'])
def addFindings():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")  # Connect to the DB Client
    mydb = myclient["FRIC"]
    mycollection = mydb["finding"] 

    req = request.get_json() 

    finding = {
        "id":str(random.randint(1,30)),
        "Finding_ID": req['findingID'],
        "Host_Name": req['hostName'],
        "IP_Port": req['ip_port'],
        "Description": req['description'],
        "Long_Description": req['longDescription'],
        "Finding_Status": req['findingStatus'],
        "Finding_Type": req['findingType'],
        "Finding_Classification": req['findingClassification'],
        "Finding_System": req['findingSystem'],
        "Finding_Task": req['findingTask'],
        "Finding_Subtask": req['findingSubtask'],
        "Related_Findings": req['relatedFindings'],
        "Finding_Confidentiality": req['findingConfidentiality'],
        "Finding_Integrity": req['findingIntegrity'],
        "Finding_Availability": req['findingAvailability'],
        "Finding_Analyst": req['findingAnalyst'],
        "Finding_Collaborators": req['findingCollaborators'],
        "Finding_Posture": req['findingPosture'],
        "Mitigation_Desc": req['mitigationDesc'],
        "Mitigation_Long_Desc": req['mitigationLongDesc'],
        "Threat_Relevence": req['threatRelevence'],
        "Countermeasure": req['countermeasure'],
        "Impact_Desc": req['impactDesc'],
        "Finding_Impact": req['findingImpact'],
        "Severity_Score": req['severityCategoryScore'],
        "Vulnerability_Score": req['vulnerabilityScore'],
        "Quantitative_Score": req['quantitativeScore'],
        "Finding_Risk": req['findingRisk'],
        "Finding_Likelihood": req['findingLikelihood'],
        "Finding_CFIS": req['findingCFIS'],
        "Finding_IFIS": req['findingIFIS'],
        "Finding_AFIS": req['findingAFIS'],
        "Impact_Score": req['impactScore'],
        "Finding_Files": req['findingFiles']
    }
    mycollection.insert_one(finding)  # Send information to collection

@app.route('/editfinding',methods=['POST'])
def editFinding():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["finding"]
    finding = []
    
    req = request.get_json()
    

    query = {"id":req["id"]}

    finding = {"$set" : {
        "Finding_ID": req['findingID'],
        "Host_Name": req['hostName'],
        "IP_Port": req['ip_port'],
        "Description": req['description'],
        "Long_Description": req['longDescription'],
        "Finding_Status": req['findingStatus'],
        "Finding_Type": req['findingType'],
        "Finding_Classification": req['findingClassification'],
        "Finding_System": req['findingSystem'],
        "Finding_Task": req['findingTask'],
        "Finding_Subtask": req['findingSubtask'],
        "Related_Findings": req['relatedFindings'],
        "Finding_Confidentiality": req['findingConfidentiality'],
        "Finding_Integrity": req['findingIntegrity'],
        "Finding_Availability": req['findingAvailability'],
        "Finding_Analyst": req['findingAnalyst'],
        "Finding_Collaborators": req['findingCollaborators'],
        "Finding_Posture": req['findingPosture'],
        "Mitigation_Desc": req['mitigationDesc'],
        "Mitigation_Long_Desc": req['mitigationLongDesc'],
        "Threat_Relevence": req['threatRelevence'],
        "Countermeasure": req['countermeasure'],
        "Impact_Desc": req['impactDesc'],
        "Finding_Impact": req['findingImpact'],
        "Severity_Score": req['severityCategoryScore'],
        "Vulnerability_Score": req['vulnerabilityScore'],
        "Quantitative_Score": req['quantitativeScore'],
        "Finding_Risk": req['findingRisk'],
        "Finding_Likelihood": req['findingLikelihood'],
        "Finding_CFIS": req['findingCFIS'],
        "Finding_IFIS": req['findingIFIS'],
        "Finding_AFIS": req['findingAFIS'],
        "Impact_Score": req['impactScore'],
        "Finding_Files": req['findingFiles'],
        }
    }

    print(finding)
    mycollection.update_one(query,finding)
    
    return jsonify(finding)


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
    log = {"Date_Time": req['date'],"Action_Performed": req['action'], "Analyst": req['analyst']}
    mycollection.insert_one(log)
    return