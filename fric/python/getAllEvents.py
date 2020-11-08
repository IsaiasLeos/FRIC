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
            {"id": f["id"], "hostName": f["Host_Name"]})
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
            {"id": f["id"], "hostName": f["Host_Name"]})
    num_finds = len(findings_json)

    task_json = []
    for f in myTaskCollection.find():
        task_json.append(
            {"taskTitle": f["Task_title"], "taskDescription": f["Task_Description"]})
    num_tasks = len(task_json)

    for e in mySystemCollection.find():
        system_json.append({
            "id": e["id"],
            "sysInfo": e['System_Info'],
            "sysDesc": e['System_Description'],
            "sysLoc": e['System_Location'],
            "sysRouter": e['System_Router'],
            "sysSwitch": e['System_Switch'],
            "sysRoom": e['System_Room'],
            "sysTestPlan": e['Test_Plan'],
            "Confidentiality": e['Confidentiality'],
            "Integrity": e['Integrity'],
            "Availability": e['Availability'],
            "num_task": num_tasks,
            "num_findings": num_finds,
            "prog": e['Progress'],
            "eventID": e['Event_ID']
        })
    return jsonify(system_json)


@app.route('/addsystem', methods=['POST'])
def addSystems():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["system"]

    req = request.get_json()
    system = {
        "id": str(random.randint(1, 30)),
        "System_Info": req['sysInfo'],
        "System_Description": req['sysDesc'],
        "System_Location": req['sysLoc'],
        "System_Router": req['sysRouter'],
        "System_Switch": req['sysSwitch'],
        "System_Room": req['sysRoom'],
        "Test_Plan": req['sysTestPlan'],
        "Confidentiality": req['Confidentiality'],
        "Integrity": req['Integrity'],
        "Availability": req['Availability'],
        "Num_Task": 13, "Num_Findings": 10,
        "Progress": "0%",
        "Event_ID": req["eventID"]
    }
    mycollection.insert_one(system)
    return


@app.route('/editsystem', methods=['POST'])
def editSystem():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["system"]
    req = request.get_json()
    query = {"id": req["id"]}
    system = {
        "$set": {
            "System_Info": req['sysInfo'],
            "System_Description": req['sysDesc'],
            "System_Location": req['sysLoc'],
            "System_Router": req['sysRouter'],
            "System_Switch": req['sysSwitch'],
            "System_Room": req['sysRoom'],
            "Test_Plan": req['sysTestPlan'],
            "Confidentiality": req['Confidentiality'],
            "Integrity": req['Integrity'],
            "Availability": req['Availability'],
            "Num_Task": 13, "Num_Findings": 10,
            "Progress": "0%",
            "Event_ID": req["eventID"]
        }
    }
    mycollection.update_one(query, system)
    return jsonify(system)

@app.route('/editevent',methods=['POST'])
def editEvent():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["event"]
    
    req = request.get_json()
    query = {"id":req["id"]}
    event = {
        "$set" : {
            "Event_name": req['name'],
            "Description": req['desc'],
            "Type": req['type'],
            "Version": req['vers'],
            "Assessment_date": req['assess_date'],
            "Org_name": req['org_name'],
            "Event_class": req['event_class'], 
            "Declass_date": req['declass_date'], 
            "Customer_name": req['customer_name'],
            "Created_By": req['created_by'], 
            "Num_systems": 13, "Num_findings": 10, 
            "Progress": "33%"
            }
        }
    mycollection.update_one(query,event)
    return jsonify(event)

#---------------START OF FINDING API ---------------#

#Function to assign index (for future mapping) based on the value of impact (FOR FINDING)
def routeImpact(impact):
    impactIndices = { #Mapping of possible index
        'VL' : 0,
        'L' : 1,
        'M' : 2,
        'H' : 3,
        'VH' : 4,   
    }
    impact_index = impactIndices.get(impact)
    return impact_index

#Function to assign index (for future mapping) based on the value of likelihood
def routeLikelihood(likelihood):
    likelihoodIndices = { #Mapping of possible index
        'VH' : 0,
        'H' : 1,
        'M' : 2,
        'L' : 3,
        'VL' : 4,   
    }
    likelihood_index = likelihoodIndices.get(likelihood)
    return likelihood_index

#Function to assign index (for future mapping) based on the value of severity
def routeVulnerabilitySeverity(severity):
    vulnerabilityIndices = { #Mapping of possible index
        'VL' : 0,
        'L' : 1,
        'M' : 2,
        'H' : 3,
        'VH' : 4,
        'INFO' : 5,  
    }
    vulnerability_index = vulnerabilityIndices.get(severity)
    return vulnerability_index
    

#Function to assign index (for future mapping) based on the value of threat
def routeRelevenceOfThreat(threat):
    threatIndices = { #Map index based on value
        'Confirmed' : 0,
        'Expected' : 1,
        'Anticipated' : 2,
        'Predicted' : 3,
        'Possible' : 4,   
    }
    threat_index = threatIndices.get(threat)
    return threat_index

#Function to calculate the Finding Likelihood
def calculateLikelihood(relevenceOfThreat, vulnerabilitySeverity):
    likelihoodMap = [ #Pre defined map per SRS
        ['VL' , 'L' , 'M' , 'H' , 'VH'],
        ['VL' , 'L' , 'M' , 'H' , 'VH'],
        ['VL' , 'L' , 'M' , 'M' , 'H'],
        ['VL' , 'L' , 'L' , 'L' , 'M'],
        ['VL' , 'VL' , 'L' , 'L' , 'L'],
    ]

    threat = routeRelevenceOfThreat(relevenceOfThreat) #Get index 
    vulnerability = routeVulnerabilitySeverity(vulnerabilitySeverity) #Get index

    likelihood = likelihoodMap[threat][vulnerability] #Select value based on indices
    return likelihood

#Function to calculate the Finding Risk
def calculateRisk(likelihood, impactLevel): 
    riskMap = [ #Pre defined map per SRS
        ['VL' , 'L' , 'M' , 'H' , 'VH'],
        ['VL' , 'L' , 'M' , 'H' , 'VH'],
        ['VL' , 'L' , 'M' , 'M' , 'H'],
        ['VL' , 'L' , 'L' , 'L' , 'M'],
        ['VL' , 'VL' , 'L' , 'L' , 'L'],
        ['INFO' , 'INFO' , 'INFO' , 'INFO' , 'INFO'],
    ]

    impact = routeImpact(impactLevel) #Get index for impact ('Y' value)
    Likelihood = routeLikelihood(likelihood) #Get index for Likelihood ('X' value)

    risk = riskMap[Likelihood][impact] #Select value based on indices
    return risk


@app.route('/findings')  # path used in JS to call this
def findings():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient['FRIC']  # Database name
    mycollection = mydb['finding']  # Collection Name
    
    finding_json = []

    #START OF DERIVED VALUES

    #Calculate Severity Category Score
    severityCategoryScore = 0 #Derived from Severity Category Code
    for e in mycollection.distinct("Severity_Category_Code"):
        if e == "I":
            severityCategoryScore = 10
        elif e == "II":
            severityCategoryScore = 7
        else:
            severityCategoryScore = 4

    #Calculate Impact Score
    findingSystemLevel = "" #Need combo of CFIS, IFIS, AFIS

    for e in mycollection.distinct("Finding_CFIS"):
        findingSystemLevel += e
    for e in mycollection.distinct("Finding_IFIS"):
        findingSystemLevel += e
    for e in mycollection.distinct("Finding_AFIS"):
        findingSystemLevel += e
    
    systemlevelQuantitative = { #Map combo to value given in SRS
        'HHH' : 10,
        'HHX' : 9,
        'HXX' : 8,
        'MMM' : 7,
        'MMX' : 6,
        'MXX' : 5,
        'LLL' : 4,
        'LLX' : 3,
        'LXX' : 2,
        'XXX' : 0,
    }
    impact_score = systemlevelQuantitative.get(findingSystemLevel) #derived value 

    #Calculate Vulnerability Severity
    
    for e in mycollection.distinct("Countermeasure"):
        countermeasureScore = int(e)

    vulnerabilitySeverityScore = (countermeasureScore * impact_score * severityCategoryScore) / 10 #Algorithm used in SRS to derive Severity Score
    
    #Calculate Quantitative Vulnerability Severity 
    if vulnerabilitySeverityScore >= 95 and vulnerabilitySeverityScore <= 100:
        quantitativeVulnerabilitySeverityScore = 'VH'
    elif vulnerabilitySeverityScore >= 80 and vulnerabilitySeverityScore < 95:
        quantitativeVulnerabilitySeverityScore = 'H'
    elif vulnerabilitySeverityScore >= 20 and vulnerabilitySeverityScore < 80:
        quantitativeVulnerabilitySeverityScore = 'M'
    elif vulnerabilitySeverityScore >= 5 and vulnerabilitySeverityScore < 20:
        quantitativeVulnerabilitySeverityScore = 'L'
    else:
        quantitativeVulnerabilitySeverityScore = 'VL'
        
    #Calculate Likelihood
    threat_relevence = ''
    for e in mycollection.distinct("Threat_Relevence"): #Get threat relevence
         threat_relevence = e

    likelihood =''

    if impact_score == 0: #Info if impact score is 0
        likelihood = 'INFO'
    else: #Map the values of threat relevence and severity score with function and return likelihood
        likelihood = calculateLikelihood(threat_relevence ,quantitativeVulnerabilitySeverityScore)
        

    #Calculate Risk
    impact_level = ''
    for e in mycollection.distinct("Impact_Level"): #Get Impact Level
         impact_level = e

    risk = ''
    if impact_score == 0: #Info if impact score is 0
        risk = 'INFO'
    else: #Map the values of likelihood and impact level with function and return the risk
        risk = calculateRisk(likelihood, impact_level)

    #End of Derived Values


    # Start of Finding    
    for e in mycollection.find():
        finding_json.append({
            "id": e['id'], 
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
            "impactLevel": e['Impact_Level'],
            "severityCategoryScore" :  severityCategoryScore,
            "vulnerabilityScore" : vulnerabilitySeverityScore,
            "quantitativeScore": quantitativeVulnerabilitySeverityScore, 
            "findingRisk": risk,
            "findingLikelihood" : likelihood,
            "findingCFIS" : e['Finding_CFIS'],
            "findingIFIS": e['Finding_IFIS'], 
            "findingAFIS": e['Finding_AFIS'],
            "impactScore" : impact_score,
            "findingFiles": e['Finding_Files'],
            "severityCategoryCode" : e['Severity_Category_Code'],
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
        "Impact_Level": req['impactLevel'],
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
        "Severity_Category_Code": req['severityCategoryCode'],
    }
    mycollection.insert_one(finding)  # Send information to collection
    return "OK"

@app.route('/editfinding',methods=['POST'])
def editFinding():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["finding"]
    finding = []
    
    req = request.get_json()
    print(req)
    

    query = {"id":req["id"]}

    finding = {"$set" : {
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
        "Impact_Level": req['impactLevel'],
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
        "Severity_Category_Code": req['severityCategoryCode'],
        }
    }

    print(finding)
    mycollection.update_one(query,finding)
    
    return jsonify(finding)

#--------------- END OF FINDING API ---------------#


#---------------START OF SUBTASK API ---------------#
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
            {"id": f["id"], "hostName": f["Host_Name"]})
    num_finds = len(findings_json)

    for e in mycollection.find():
        subtask_json.append({
            "id": e["id"],
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
            "task": e['Task'],
            "taskID": e['Task_ID']
        })
    return jsonify(subtask_json)


@app.route('/addsubtask', methods=['POST'])
def addSubtasks():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["subtask"]
    req = request.get_json()
    subtask = {
        "id": str(random.randint(1, 30)),
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
        "Task": "Task 0",
        "Task_ID": req['taskID']
    }
    mycollection.insert_one(subtask)

@app.route('/editsubtask', methods=['POST'])
def editSubtask():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["subtask"]
    req = request.get_json()
    query = {"id": req["id"]}
    subtask = {
        "$set": {
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
            "Task": "Task 0",
            "Task_ID": req['taskID']
        }
    }
    mycollection.update_one(query, subtask)
    return jsonify(subtask)

#--------------- END OF FINDING API ---------------#
    
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
            {"id": f["id"], "hostName": f["Host_Name"]})
    num_finds = len(findings_json)

    subtask_json = []
    # Get number of systems
    for s in mySubtaskCollection.find():
        subtask_json.append(
            {"subtaskTitle": s["Subtask_Title"], "subtaskDescription": s["Subtask_Description"]})
    num_subtask = len(subtask_json)

    for e in mycollection.find():

        task_json.append({
            "id": e['id'],
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

        task_json.append({
            "id": e['id'],
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
            "num_finding": num_finds,
            "subtaskID": e['SubTask_ID']
        })
    return jsonify(task_json)

#                                                   Function used to add task 
@app.route('/addtask', methods=['POST'])
def addTasks():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["task"]
    req = request.get_json()
    task = {
        "id":str(random.randint(1,30)),
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
        "Num_subtask": 0, "Num_finding": 13,
        "Progress": "0%",
        "SubTask_ID": req["subtaskID"]
    }
    mycollection.insert_one(task) #send info to collection
    return "OK"

#                                                   Function used to edit task 
@app.route('/edittask',methods=['POST'])
def editTask():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["task"]
    req = request.get_json()
    query = {"id":req["id"]}

    task = {"$set" : {
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
        "Num_subtask": 0, "Num_finding": 13,
        "Progress": "0%",
        "SubTask_ID": req["subtaskID"]
    }}
    mycollection.update_one(query, task)
    return jsonify(task)

@app.route('/addlog', methods=['POST'])
def addLog():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["logs"]

    req = request.get_json()
    log = {"Date_Time": req['date'],"Action_Performed": req['action'], "Analyst": req['analyst']}
    mycollection.insert_one(log)
    return "OK"