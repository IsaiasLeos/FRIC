import json
import pymongo
import random
import docx
import openpyxl
from flask import Flask, jsonify, request, make_response
from docx import Document
from docx.shared import Inches, Pt
from datetime import date


app = Flask(__name__)

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
# TO:DO 
# Add analyst
# Dont allow empty events


# Given Analyst return progress # tasks completed / # of tasks
def calculateProgress(analyst):
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    myTaskCollection = mydb["task"]
    tasks = []
    progress = 0
    for t in myTaskCollection.find({"Task_Analysts": analyst}):
        tasks.append(t)
        progress += int(t["Task_Progress"])
    if len(tasks) == 0:
        return 0
    return progress / len(tasks)


# Given event, return analsysts from that event #
@app.route("/analystsInEvent", methods=["POST"])
def analystList():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    analysts = []
    myAnalystCollection = mydb["event_analyst"]
    req = request.get_json()
    for a in myAnalystCollection.find({"event_id": req}):
        analysts.append(
            {
                "analyst": a["analyst"],
                "event": a["event_id"],
                "is_lead": a["is_lead"],
                "progress": calculateProgress(a["analyst"]),
            }
        )

    return jsonify(analysts)


# Returns all analysts #
@app.route("/analysts")
def analysts():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    analysts = []
    myAnalystCollection = mydb["analyst"]

    for a in myAnalystCollection.find():
        analysts.append({"isLead": a["isLead"], "initials": a["initials"]})
    return jsonify(analysts)

#Return All events
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
        findings_json.append({"id": f["id"], "hostName": f["Host_Name"]})
    num_finds = len(findings_json)

    systems_json = []
    # Get number of systems
    for s in mySystemCollection.find():
        systems_json.append(
            {"sysInfo": s["System_Info"], "sysDesc": s["System_Description"]}
        )
    num_sys = len(systems_json)

    # Event Overview Information
    for e in myEventCollection.find():

        events_json.append(
            {
                "id": e["id"],
                "name": e["Event_name"],
                "desc": e["Description"],
                "type": e["Type"],
                "version": e["Version"],
                "assess_date": e["Assessment_date"],
                "org_name": e["Org_name"],
                "event_class": e["Event_class"],
                "declass_date": e["Declass_date"],
                "customer": e["Customer_name"],
                "num_sys": num_sys,
                "num_findings": num_finds,
                "prog": e["Progress"],
                "created_by": e["Created_By"],
            }
        )

    return jsonify(events_json)


# TO:DO Event ID Increment
@app.route("/addevent", methods=["POST"])
def addEvent():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["event"]

    req = request.get_json()
    event = {
        "id": str(random.randint(1, 30)),
        "Event_name": req["name"],
        "Description": req["desc"],
        "Type": req["type"],
        "Version": req["vers"],
        "Assessment_date": req["assess_date"],
        "Org_name": req["org_name"],
        "Event_class": req["event_class"],
        "Declass_date": req["declass_date"],
        "Customer_name": req["customer_name"],
        "Created_By": req["created_by"],
        "Num_systems": 13,
        "Num_findings": 10,
        "Progress": "33%",
    }

    mycollection.insert_one(event)
    return


@app.route("/getprogress")
def getProgress():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mySystemCollection = mydb["task"]
    task_progress = []
    for e in mySystemCollection.find():
        task_progress.append({"taskProgress": e["Task_Progress"]})
    return jsonify(task_progress)


@app.route("/getsystem")
def systems():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mySystemCollection = mydb["system"]
    myFindingCollection = mydb["finding"]
    myTaskCollection = mydb["task"]
    system_json = []
    findings_json = []

    for f in myFindingCollection.find():
        findings_json.append({"id": f["id"], "hostName": f["Host_Name"]})
    num_finds = len(findings_json)

    task_json = []
    for f in myTaskCollection.find():
        task_json.append(
            {"taskTitle": f["Task_title"], "taskDescription": f["Task_Description"]}
        )
    num_tasks = len(task_json)

    for e in mySystemCollection.find():
        system_json.append(
            {
                "id": e["id"],
                "sysInfo": e["System_Info"],
                "sysDesc": e["System_Description"],
                "sysLoc": e["System_Location"],
                "sysRouter": e["System_Router"],
                "sysSwitch": e["System_Switch"],
                "sysRoom": e["System_Room"],
                "sysTestPlan": e["Test_Plan"],
                "Confidentiality": e["Confidentiality"],
                "Integrity": e["Integrity"],
                "Availability": e["Availability"],
                "num_task": num_tasks,
                "num_findings": num_finds,
                "prog": e["Progress"],
                "eventID": e["Event_ID"],
            }
        )
    return jsonify(system_json)


@app.route("/addsystem", methods=["POST"])
def addSystems():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["system"]

    req = request.get_json()
    system = {
        "id": str(random.randint(1, 30)),
        "System_Info": req["sysInfo"],
        "System_Description": req["sysDesc"],
        "System_Location": req["sysLoc"],
        "System_Router": req["sysRouter"],
        "System_Switch": req["sysSwitch"],
        "System_Room": req["sysRoom"],
        "Test_Plan": req["sysTestPlan"],
        "Confidentiality": req["Confidentiality"],
        "Integrity": req["Integrity"],
        "Availability": req["Availability"],
        "Num_Task": 13,
        "Num_Findings": 10,
        "Progress": "0%",
        "Event_ID": req["eventID"],
    }
    mycollection.insert_one(system)
    return


@app.route("/editsystem", methods=["POST"])
def editSystem():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["system"]
    req = request.get_json()
    query = {"id": req["id"]}
    system = {
        "$set": {
            "System_Info": req["sysInfo"],
            "System_Description": req["sysDesc"],
            "System_Location": req["sysLoc"],
            "System_Router": req["sysRouter"],
            "System_Switch": req["sysSwitch"],
            "System_Room": req["sysRoom"],
            "Test_Plan": req["sysTestPlan"],
            "Confidentiality": req["Confidentiality"],
            "Integrity": req["Integrity"],
            "Availability": req["Availability"],
            "Num_Task": 13,
            "Num_Findings": 10,
            "Progress": "0%",
            "Event_ID": req["eventID"],
        }
    }
    mycollection.update_one(query, system)
    return jsonify(system)


@app.route("/editevent", methods=["POST"])
def editEvent():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["event"]

    req = request.get_json()
    query = {"id": req["id"]}
    event = {
        "$set": {
            "Event_name": req["name"],
            "Description": req["desc"],
            "Type": req["type"],
            "Version": req["vers"],
            "Assessment_date": req["assess_date"],
            "Org_name": req["org_name"],
            "Event_class": req["event_class"],
            "Declass_date": req["declass_date"],
            "Customer_name": req["customer_name"],
            "Created_By": req["created_by"],
            "Num_systems": 13,
            "Num_findings": 10,
            "Progress": "33%",
        }
    }
    mycollection.update_one(query, event)
    return jsonify(event)


# ---------------START OF FINDING API ---------------#


@app.route("/findings")  # path used in JS to call this
def findings():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]  # Database name
    mycollection = mydb["finding"]  # Collection Name

    finding_json = []

    # Start of Finding
    for e in mycollection.find():
        finding_json.append(
            {
                "id": e["id"],
                "hostName": e["Host_Name"],
                "ip_port": e["IP_Port"],
                "description": e["Description"],
                "longDescription": e["Long_Description"],
                "findingStatus": e["Finding_Status"],
                "findingType": e["Finding_Type"],
                "findingClassification": e["Finding_Classification"],
                "findingSystem": e["Finding_System"],
                "findingTask": e["Finding_Task"],
                "findingSubtask": e["Finding_Subtask"],
                "relatedFindings": e["Related_Findings"],
                "findingConfidentiality": e["Finding_Confidentiality"],
                "findingIntegrity": e["Finding_Integrity"],
                "findingAvailability": e["Finding_Availability"],
                "findingAnalyst": e["Finding_Analyst"],
                "findingCollaborators": e["Finding_Collaborators"],
                "findingPosture": e["Finding_Posture"],
                "mitigationDesc": e["Mitigation_Desc"],
                "mitigationLongDesc": e["Mitigation_Long_Desc"],
                "threatRelevence": e["Threat_Relevence"],
                "countermeasure": e["Countermeasure"],
                "impactDesc": e["Impact_Desc"],
                "impactLevel": e["Impact_Level"],
                "severityCategoryScore": e["Severity_Score"],
                "vulnerabilityScore": e["Vulnerability_Score"],
                "quantitativeScore": e["Quantitative_Score"],
                "findingRisk": e["Finding_Risk"],
                "findingLikelihood": e["Finding_Likelihood"],
                "findingCFIS": e["Finding_CFIS"],
                "findingIFIS": e["Finding_IFIS"],
                "findingAFIS": e["Finding_AFIS"],
                "impactScore": e["Impact_Score"],
                "findingFiles": e["Finding_Files"],
                "severityCategoryCode": e["Severity_Category_Code"],
                "systemID": e["System_ID"],
                "taskID": e["Task_ID"],
                "subtaskID": e["Subtask_ID"],
            }
        )
    return jsonify(finding_json)  # return what was found in the collection


# ---------- HELPER FUNCTIONS TO DERIVE ATTRIBUTES OF FINDING ----------#

# Map the Finding Severity Code to the Score
def calculateSeverityScore(code):
    severityCategoryScore = 0

    if code == "I":
        severityCategoryScore = 10
    elif code == "II":
        severityCategoryScore = 7
    else:
        severityCategoryScore = 4

    return severityCategoryScore


# Function to calculate impact score based on the finding CFIS IFIS and AFIS
def calculateImpactScore(CFIS, IFIS, AFIS):
    findingSystemLevel = ""
    impact_score = 0
    findingSystemLevel += CFIS  # Create combination string of the values
    findingSystemLevel += IFIS
    findingSystemLevel += AFIS

    systemlevelQuantitative = {  # Map combo to value given in SRS
        "HHH": 10,
        "HHX": 9,
        "HXX": 8,
        "MMM": 7,
        "MMX": 6,
        "MXX": 5,
        "LLL": 4,
        "LLX": 3,
        "LXX": 2,
        "XXX": 0,
    }

    impact_score = systemlevelQuantitative.get(findingSystemLevel)
    return impact_score


# Function to calculate Vulnerability Severity based on countermeasure, impactscore, and severity category score
def calculateVulnerabilitySeverity(countermeasure, impactScore, severityCategoryScore):
    vulnerabilitySeverityScore = 0
    countermeasureScore = 0

    countermeasureScore = int(countermeasure)
    vulnerabilitySeverityScore = (
        countermeasureScore * impactScore * severityCategoryScore
    ) / 10  # Algorithm used in SRS to derive Severity Score

    return vulnerabilitySeverityScore


# Function to calculate QVS based on the vulnerability severity score
def calcualteQuantitativeVulnerabilitySeverity(vulnerabilitySeverityScore):
    quantitativeVulnerabilitySeverityScore = ""

    if (
        vulnerabilitySeverityScore >= 95 and vulnerabilitySeverityScore <= 100
    ):  # Assignment based on value
        quantitativeVulnerabilitySeverityScore = "VH"
    elif vulnerabilitySeverityScore >= 80 and vulnerabilitySeverityScore < 95:
        quantitativeVulnerabilitySeverityScore = "H"
    elif vulnerabilitySeverityScore >= 20 and vulnerabilitySeverityScore < 80:
        quantitativeVulnerabilitySeverityScore = "M"
    elif vulnerabilitySeverityScore >= 5 and vulnerabilitySeverityScore < 20:
        quantitativeVulnerabilitySeverityScore = "L"
    else:
        quantitativeVulnerabilitySeverityScore = "VL"

    return quantitativeVulnerabilitySeverityScore


# Function to assign index (for future mapping) based on the value of impact (FOR FINDING)
def routeImpact(impact):
    impactIndices = {  # Mapping of possible index
        "VL": 0,
        "L": 1,
        "M": 2,
        "H": 3,
        "VH": 4,
    }
    impact_index = impactIndices.get(impact)
    return impact_index


# Function to assign index (for future mapping) based on the value of likelihood
def routeLikelihood(likelihood):
    likelihoodIndices = {  # Mapping of possible index
        "VH": 0,
        "H": 1,
        "M": 2,
        "L": 3,
        "VL": 4,
    }
    likelihood_index = likelihoodIndices.get(likelihood)
    return likelihood_index


# Function to assign index (for future mapping) based on the value of severity
def routeVulnerabilitySeverity(severity):
    vulnerabilityIndices = {  # Mapping of possible index
        "VL": 0,
        "L": 1,
        "M": 2,
        "H": 3,
        "VH": 4,
        "INFO": 5,
    }
    vulnerability_index = vulnerabilityIndices.get(severity)
    return vulnerability_index


# Function to assign index (for future mapping) based on the value of threat
def routeRelevenceOfThreat(threat):
    threatIndices = {  # Map index based on value
        "Confirmed": 0,
        "Expected": 1,
        "Anticipated": 2,
        "Predicted": 3,
        "Possible": 4,
    }
    threat_index = threatIndices.get(threat)
    return threat_index


# Function to calculate the Finding Likelihood
def calculateLikelihood(relevenceOfThreat, vulnerabilitySeverity):
    likelihoodMap = [  # Pre defined map per SRS
        ["VL", "L", "M", "H", "VH"],
        ["VL", "L", "M", "H", "VH"],
        ["VL", "L", "M", "M", "H"],
        ["VL", "L", "L", "L", "M"],
        ["VL", "VL", "L", "L", "L"],
    ]

    threat = routeRelevenceOfThreat(relevenceOfThreat)  # Get index
    vulnerability = routeVulnerabilitySeverity(vulnerabilitySeverity)  # Get index

    likelihood = likelihoodMap[threat][vulnerability]  # Select value based on indices
    return likelihood


# Function to calculate the Finding Risk
def calculateRisk(likelihood, impactLevel):
    riskMap = [  # Pre defined map per SRS
        ["VL", "L", "M", "H", "VH"],
        ["VL", "L", "M", "H", "VH"],
        ["VL", "L", "M", "M", "H"],
        ["VL", "L", "L", "L", "M"],
        ["VL", "VL", "L", "L", "L"],
        ["INFO", "INFO", "INFO", "INFO", "INFO"],
    ]

    impact = routeImpact(impactLevel)  # Get index for impact ('Y' value)
    Likelihood = routeLikelihood(likelihood)  # Get index for Likelihood ('X' value)

    risk = riskMap[Likelihood][impact]  # Select value based on indices
    return risk


@app.route("/addfinding", methods=["POST"])
def addFindings():
    myclient = pymongo.MongoClient(
        "mongodb://localhost:27017/"
    )  # Connect to the DB Client
    mydb = myclient["FRIC"]
    mycollection = mydb["finding"]

    req = request.get_json()

    # severityCategoryScore = 0 #Derived from Severity Category Code

    finding = {
        "id": str(random.randint(1, 30)),
        "Host_Name": req["hostName"],
        "IP_Port": req["ip_port"],
        "Description": req["description"],
        "Long_Description": req["longDescription"],
        "Finding_Status": req["findingStatus"],
        "Finding_Type": req["findingType"],
        "Finding_Classification": req["findingClassification"],
        "Finding_System": req["findingSystem"],
        "Finding_Task": req["findingTask"],
        "Finding_Subtask": req["findingSubtask"],
        "Related_Findings": req["relatedFindings"],
        "Finding_Confidentiality": req["findingConfidentiality"],
        "Finding_Integrity": req["findingIntegrity"],
        "Finding_Availability": req["findingAvailability"],
        "Finding_Analyst": req["findingAnalyst"],
        "Finding_Collaborators": req["findingCollaborators"],
        "Finding_Posture": req["findingPosture"],
        "Mitigation_Desc": req["mitigationDesc"],
        "Mitigation_Long_Desc": req["mitigationLongDesc"],
        "Threat_Relevence": req["threatRelevence"],
        "Countermeasure": req["countermeasure"],
        "Impact_Desc": req["impactDesc"],
        "Impact_Level": req["impactLevel"],
        "Severity_Score": req["severityCategoryScore"],
        "Vulnerability_Score": req["vulnerabilityScore"],
        "Quantitative_Score": req["quantitativeScore"],
        "Finding_Risk": req["findingRisk"],
        "Finding_Likelihood": req["findingLikelihood"],
        "Finding_CFIS": req["findingCFIS"],
        "Finding_IFIS": req["findingIFIS"],
        "Finding_AFIS": req["findingAFIS"],
        "Impact_Score": req["impactScore"],
        "Finding_Files": req["findingFiles"],
        "Severity_Category_Code": req["severityCategoryCode"],
        "System_ID": req["systemID"],
        "Task_ID": req["taskID"],
        "Subtask_ID": req["subtaskID"],
    }

    # ----START OF DERIVED ATTRIBUTES----#
    # Calculate Severity Category Score
    severityCategoryScore = 0
    severityCategoryCode = finding.get("Severity_Category_Code")
    severityCategoryScore = calculateSeverityScore(severityCategoryCode)
    finding.update({"Severity_Score": severityCategoryScore})

    # Calculate Impact Score
    findingImpactScore = 0
    findingCFIS = finding.get("Finding_CFIS")
    findingIFIS = finding.get("Finding_IFIS")
    findingAFIS = finding.get("Finding_AFIS")
    findingImpactScore = calculateImpactScore(findingCFIS, findingIFIS, findingAFIS)
    finding.update({"Impact_Score": findingImpactScore})

    # Calculate Vulerability Severity=
    vulnerabilitySeverityScore = 0
    counterMeasure = finding.get("Countermeasure")
    vulnerabilitySeverityScore = calculateVulnerabilitySeverity(
        counterMeasure, findingImpactScore, severityCategoryScore
    )
    finding.update({"Vulnerability_Score": vulnerabilitySeverityScore})

    # Calculate Quantitative Vulnerability Severity
    QVS = ""
    QVS = calcualteQuantitativeVulnerabilitySeverity(vulnerabilitySeverityScore)
    finding.update({"Quantitative_Score": QVS})

    # Calculate Likelihood
    threat_relevence = ""
    threat_relevence = finding.get("Threat_Relevence")
    likelihood = ""

    if findingImpactScore == 0:
        likelihood = "INFO"
    else:
        likelihood = calculateLikelihood(threat_relevence, QVS)

    finding.update({"Finding_Likelihood": likelihood})

    # Calculate Risk
    impact_level = ""
    impact_level = finding.get("Impact_Level")
    risk = ""

    if findingImpactScore == 0:
        risk = "INFO"
    else:
        risk = calculateRisk(likelihood, impact_level)

    finding.update({"Finding_Risk": risk})
    # ----END OF DERIVED ATTRIBUTES----#

    mycollection.insert_one(finding)  # Send information to collection
    return "OK"


@app.route("/editfinding", methods=["POST"])
def editFinding():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["finding"]
    finding = []

    req = request.get_json()

    query = {"id": req["id"]}

    finding = {
        "$set": {
            "Host_Name": req["hostName"],
            "IP_Port": req["ip_port"],
            "Description": req["description"],
            "Long_Description": req["longDescription"],
            "Finding_Status": req["findingStatus"],
            "Finding_Type": req["findingType"],
            "Finding_Classification": req["findingClassification"],
            "Finding_System": req["findingSystem"],
            "Finding_Task": req["findingTask"],
            "Finding_Subtask": req["findingSubtask"],
            "Related_Findings": req["relatedFindings"],
            "Finding_Confidentiality": req["findingConfidentiality"],
            "Finding_Integrity": req["findingIntegrity"],
            "Finding_Availability": req["findingAvailability"],
            "Finding_Analyst": req["findingAnalyst"],
            "Finding_Collaborators": req["findingCollaborators"],
            "Finding_Posture": req["findingPosture"],
            "Mitigation_Desc": req["mitigationDesc"],
            "Mitigation_Long_Desc": req["mitigationLongDesc"],
            "Threat_Relevence": req["threatRelevence"],
            "Countermeasure": req["countermeasure"],
            "Impact_Desc": req["impactDesc"],
            "Impact_Level": req["impactLevel"],
            "Severity_Score": req["severityCategoryScore"],
            "Vulnerability_Score": req["vulnerabilityScore"],
            "Quantitative_Score": req["quantitativeScore"],
            "Finding_Risk": req["findingRisk"],
            "Finding_Likelihood": req["findingLikelihood"],
            "Finding_CFIS": req["findingCFIS"],
            "Finding_IFIS": req["findingIFIS"],
            "Finding_AFIS": req["findingAFIS"],
            "Impact_Score": req["impactScore"],
            "Finding_Files": req["findingFiles"],
            "Severity_Category_Code": req["severityCategoryCode"],
            "System_ID": req["systemID"],
            "Task_ID": req["taskID"],
            "Subtask_ID": req["subtaskID"],
        }
    }

    mycollection.update_one(query, finding)

    return jsonify(finding)


# --------------- END OF FINDING API ---------------#


# ---------------START OF SUBTASK API ---------------#
@app.route("/subtasks")
def subtasks():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["subtask"]
    myFindingCollection = mydb["finding"]
    subtask_json = []

    findings_json = []
    # Get number of Findings
    for f in myFindingCollection.find():
        findings_json.append({"id": f["id"], "hostName": f["Host_Name"]})
    num_finds = len(findings_json)

    for e in mycollection.find():
        subtask_json.append(
            {
                "id": e["id"],
                "subtaskTitle": e["Subtask_Title"],
                "subtaskDescription": e["Subtask_Description"],
                "subtaskProgress": e["Subtask_Progress"],
                "subtaskDueDate": e["Subtask_Due_Date"],
                "analysts": e["Analysts"],
                "collaborators": e["Collaborators"],
                "relatedTask": e["Related_Task"],
                "subtasks": e["Subtasks"],
                "attachments": e["Attachments"],
                "numFindings": num_finds,
                "analyst": e["Analyst"],
                "task": e["Task"],
                "taskID": e["Task_ID"],
            }
        )
    return jsonify(subtask_json)


@app.route("/addsubtask", methods=["POST"])
def addSubtasks():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["subtask"]
    req = request.get_json()
    subtask = {
        "id": str(random.randint(1, 30)),
        "Subtask_Title": req["subtaskTitle"],
        "Subtask_Description": req["subtaskDescription"],
        "Subtask_Progress": req["subtaskProgress"],
        "Subtask_Due_Date": req["subtaskDueDate"],
        "Analysts": req["analysts"],
        "Collaborators": req["collaborators"],
        "Related_Task": req["relatedTask"],
        "Subtasks": req["subtasks"],
        "Attachments": req["attachments"],
        "Num_Findings": 0,
        "Analyst": "Analyst 0",
        "Task": "Task 0",
        "Task_ID": req["taskID"],
    }
    mycollection.insert_one(subtask)


@app.route("/editsubtask", methods=["POST"])
def editSubtask():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["subtask"]
    req = request.get_json()
    query = {"id": req["id"]}
    subtask = {
        "$set": {
            "Subtask_Title": req["subtaskTitle"],
            "Subtask_Description": req["subtaskDescription"],
            "Subtask_Progress": req["subtaskProgress"],
            "Subtask_Due_Date": req["subtaskDueDate"],
            "Analysts": req["analysts"],
            "Collaborators": req["collaborators"],
            "Related_Task": req["relatedTask"],
            "Subtasks": req["subtasks"],
            "Attachments": req["attachments"],
            "Num_Findings": 0,
            "Analyst": "Analyst 0",
            "Task": "Task 0",
            "Task_ID": req["taskID"],
        }
    }
    mycollection.update_one(query, subtask)
    return jsonify(subtask)


# --------------- END OF SUBTASK API ---------------#


# ---------------START OF TASK API ---------------#
# Function used to get overview of tasks
@app.route("/tasks")
def tasks():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["task"]
    myFindingCollection = mydb["finding"]
    mySubtaskCollection = mydb["subtask"]

    findings_json = []
    # Get number of Findings
    for f in myFindingCollection.find():
        findings_json.append({"id": f["id"], "hostName": f["Host_Name"]})
    num_finds = len(findings_json)

    subtask_json = []
    # Get number of systems
    for s in mySubtaskCollection.find():
        subtask_json.append(
            {
                "subtaskTitle": s["Subtask_Title"],
                "subtaskDescription": s["Subtask_Description"],
            }
        )
    num_subtask = len(subtask_json)

    task_json = []
    # Start of task
    for e in mycollection.find():
        task_json.append(
            {
                "id": e["id"],
                "taskTitle": e["Task_title"],
                "taskDescription": e["Task_Description"],
                "system": e["System"],
                "taskPriority": e["Task_Priority"],
                "taskProgress": e["Task_Progress"],
                "taskDueDate": e["Task_Due_Date"],
                "taskAnalysts": e["Task_Analysts"],
                "taskCollaborators": e["Task_Collaborators"],
                "relatedTasks": e["Related_Tasks"],
                "attachments": e["Attachments"],
                "num_subtask": num_subtask,
                "num_finding": num_finds,
                "subtaskID": e['Subtask_ID'],
                #"systemID" : e['System_ID'],
            })
    return jsonify(task_json)


# Function used to add task
@app.route("/addtask", methods=["POST"])
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
        "Subtask_ID": req['subtaskID'],
        #"System_ID" : req['systemID'],
    }
    mycollection.insert_one(task)  # send info to collection
    return "OK"


# Function used to edit task
@app.route("/edittask", methods=["POST"])
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
        "Subtask_ID": req['subtaskID'],
        #"System_ID" : req['systemID'],

    }}
    mycollection.update_one(query, task)
    return jsonify(task)


# --------------- END OF TASK API ---------------#


@app.route("/addlog", methods=["POST"])
def addLog():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    mycollection = mydb["logs"]

    req = request.get_json()
    log = {
        "Date_Time": req["date"],
        "Action_Performed": req["action"],
        "Analyst": req["analyst"],
    }
    mycollection.insert_one(log)
    return "OK"


@app.route("/createRiskMatrix", methods=["POST"])
def create_Risk_Matrix():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]
    myFindingCollection = mydb["finding"]
    finding_json = []
    for f in myFindingCollection.find():  # Getting the findings in the db
        finding_json.append(
            (
                f["IP_Port"],
                f["Description"],
                f["Finding_Status"],
                f["Finding_Type"],
                f["Finding_Posture"],
                f["Finding_Confidentiality"],
                f["Finding_Integrity"],
                f["Finding_Availability"],
                f["Impact_Score"],
                f["Severity_Category_Code"],
                f["Severity_Score"],
                f["Countermeasure"],
                f["Vulnerability_Score"],
                f["Quantitative_Score"],
                f["Threat_Relevence"],
                f["Finding_Likelihood"],
                f["Impact_Level"],
                f["Finding_Risk"],
            )
        )
    wb = openpyxl.Workbook()  # Opening the workbook
    ws = wb.active  # Worksheet object
    ws.title = "risk_matrix"  # Changing the title of the worksheet
    ws.append(
        (
            "IP:PORT",
            "DESCRIPTION",
            "STATUS",
            "TYPE",
            "POSTURE",
            "C",
            "I",
            "A",
            "IMP. SCORE",
            "CAT",
            "CAT SCORE",
            "CM",
            "VS(n)",
            "VS(q)",
            "RELEVANCE OF THREAT",
            "LIKELIHOOD",
            "IMPACT",
            "RISK",
        )
    )  # First row in the worksheet
    for finding in finding_json:  # Appending all of the findings to the worksheet
        ws.append(finding)
    wb.save("../src/reports/riskMatrix.xlsx")  #Saving the file




@app.route("/generatefinalreport", methods=["POST"])
def generatefinalreport():

    document = Document()  # Report Object
    # Formatting
    TStyle = document.styles["Normal"]
    # Font
    TStyle.font.name = "Calibri (Body)"
    # Font Size
    TStyle.font.size = Pt(12)
    # How to add a Picture
    document.add_picture(
        "../src/assets/logo.png",
    )

    sentence = document.add_paragraph()

    sentence.add_run(
        "Combat Capabilities Development Command (CCDC) Data & Analysis Center (DAC) Enter System Name Enter Event Type (e.g., CVPA, CVI, VoF, etc) Report"
    ).bold = True

    # Specify all the analyst in the event.
    sentence.add_run("by ").bold = True
    # End of the page description
    sentence.add_run(
        "Classified by: Enter Lead Analyst Name\nDerived from: Enter Title of System's Security Classification Guide\nDeclassify on: Enter Declassification Date (e.g., 04/20/2040)"
    ).bold = True
    document.add_page_break()

    # Connect to the finding collection
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FRIC"]  # Database name
    mycollection = mydb["finding"]  # Collection Name

    finding_json = []

    # Start of Finding
    for e in mycollection.find():
        finding_json.append(
            {
                "id": e["id"],
                "hostName": e["Host_Name"],
                "ip_port": e["IP_Port"],
                "description": e["Description"],
                "longDescription": e["Long_Description"],
                "findingStatus": e["Finding_Status"],
                "findingType": e["Finding_Type"],
                "findingClassification": e["Finding_Classification"],
                "findingSystem": e["Finding_System"],
                "findingTask": e["Finding_Task"],
                "findingSubtask": e["Finding_Subtask"],
                "relatedFindings": e["Related_Findings"],
                "findingConfidentiality": e["Finding_Confidentiality"],
                "findingIntegrity": e["Finding_Integrity"],
                "findingAvailability": e["Finding_Availability"],
                "findingAnalyst": e["Finding_Analyst"],
                "findingCollaborators": e["Finding_Collaborators"],
                "findingPosture": e["Finding_Posture"],
                "mitigationDesc": e["Mitigation_Desc"],
                "mitigationLongDesc": e["Mitigation_Long_Desc"],
                "threatRelevence": e["Threat_Relevence"],
                "countermeasure": e["Countermeasure"],
                "impactDesc": e["Impact_Desc"],
                "impactLevel": e["Impact_Level"],
                "severityCategoryScore": e["Severity_Score"],
                "vulnerabilityScore": e["Vulnerability_Score"],
                "quantitativeScore": e["Quantitative_Score"],
                "findingRisk": e["Finding_Risk"],
                "findingLikelihood": e["Finding_Likelihood"],
                "findingCFIS": e["Finding_CFIS"],
                "findingIFIS": e["Finding_IFIS"],
                "findingAFIS": e["Finding_AFIS"],
                "impactScore": e["Impact_Score"],
                "findingFiles": e["Finding_Files"],
                "severityCategoryCode": e["Severity_Category_Code"],
                "systemID": e["System_ID"],
                "taskID": e["Task_ID"],
                "subtaskID": e["Subtask_ID"],
            }
        )

    # Create the tables
    for x in range(len(finding_json)):
        tableDescription = document.add_paragraph()
        finding = finding_json[x]
        tableDescription.add_run(
            "Table " + str(x + 1) + " describes the " + finding["description"] + " "
        )
        tableDescription.add_run(
            "\nTable " + str(x + 1) + ". " + finding["description"]
        ).bold = True
        table = document.add_table(
            rows=1, cols=8
        )  # Specify Rows and Columns for the Table
        table.autofit = True
        hdr_cells = table.rows[0].cells
        hdr_cells[0].text = "ID"
        hdr_cells[1].text = finding["id"]
        hdr_cells[3].text = "Impact Score"
        hdr_cells[4].text = str(finding["impactScore"])
        hdr_cells[5].text = "Status"
        hdr_cells[6].text = finding["findingStatus"]
        hdr_cells[7].text = "Posture"
        row_cells = table.add_row().cells  # Add Row
        row_cells[0].text = "Host Names"
        row_cells[2].text = "IP:Port"
        row_cells[3].text = "CAT"
        row_cells[4].text = finding["severityCategoryCode"]
        row_cells[5].text = "Likelihood"
        row_cells[6].text = finding["findingLikelihood"]
        row_cells[7].text = finding["findingPosture"]
        row_cells = table.add_row().cells  # Add Row
        row_cells[3].text = "CAT Score"
        row_cells[4].text = str(finding["severityCategoryScore"])
        row_cells[5].text = "Impact"
        row_cells[6].text = finding["impactLevel"]
        row_cells = table.add_row().cells  # Add Row
        row_cells[3].text = "VS-Score"
        row_cells[4].text = str(finding["vulnerabilityScore"])
        row_cells[5].text = "Risk"
        row_cells[6].text = finding["findingRisk"]
        row_cells = table.add_row().cells  # Add Row

    document.save("../src/reports/finalreport.docx")
    return "OK"
