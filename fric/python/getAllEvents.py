from flask import Flask,jsonify
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
        events_json.append({"name": e['Event_name']})
    return jsonify(events_json)

def addEvent():
   



    


