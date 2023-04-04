from pymongo import MongoClient
from datetime import datetime

client = MongoClient('mongodb://dataextractproject:kiD69IBQn3j97JxXPhJOy0lOeYTyA8Trh6VWeTuYQHNWwtUWeELoLKQzPBL2eFA7xsUDKBNSbTE6ACDbTw4oPw==@dataextractproject.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@dataextractproject@')

db = client['DataExtract']
collection = db["todo"]
collection1 = db["template"]


def create(data):
    data = dict(data)
    response = collection.insert_one(data)
    return str(response.inserted_id)

def templateCreate(data):
    data = dict(data)
    response = collection1.insert_one(data)
    return str(response.inserted_id)

def all():
    response = collection.find({})
    data = []
    for i in response:
        i["_id"] = str(i["_id"])
        data.append(i)
    return data

def templateAll():
    response = collection1.find({})
    data = []
    for i in response:
        i["_id"] = str(i["_id"])
        data.append(i)
    return data

def get_one(condition):
     response = collection.find_one({"name":condition})
     response["_id"] = str(response["_id"])
     return response
 
def  update(name, data):
    response = collection.update_one({"name":name}, {"$set":data})
    return response.modified_count

def delete(_id):
    response = collection.delete_one({"_id":_id})
    return response.deleted_count

def delete(_id):
    response = collection1.delete_one({"_id":_id})
    return response.deleted_count
    