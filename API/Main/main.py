from fastapi import FastAPI, status, Response, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException
from pydantic import BaseModel
import Models
import DataBase 
import os
import uvicorn

app = FastAPI(title = "Upload file using FastAPI")

db ={}

@app.get("/")
def get():
    return{"Hello World"}

# Get one Data API
@app.get("/get/{name}")
def get_one(name:str):
    data = DataBase.get_one(name)
    return{"data":data}
    
# Get all Data API
@app.get("/all")
def get_all():
    data = DataBase.all()
    return{"data":data}

# Get template all Data API
@app.get("/template_all")
def get_template_all():
    data = DataBase.templateAll()
    return{"data":data}

# File Upload API
@app.post("/upload")
async def upload(file:UploadFile = File(...)):
    file_name = file.filename    
    with open(os.path.join("Uploads",file_name),"wb") as f:
        content = await file.read()
        f.write(content)
    return {"success":True, "file_name":file_name, "message":"File uploaded successfully."}

# Create Data API
@app.post("/create")
def create(data:Models.Todo):
    id = DataBase.create(data)
    return {"inserted": True,"inserted_id": id}

# Create Tamplate Data API
@app.post("/createtamplate")
def createtamplate(data:Models.Tamplate):
    id = DataBase.templateCreate(data)
    return {"inserted": True,"inserted_id":id}

# Update Data
@app.put("/Todo/{name}")
async def update(name,item:Models.Todo):
    return {"inserted": True, **item.dict()}

# Delete Data API
@app.delete("/delete/{_id}")
def delete(_id:str):
    data = DataBase.delete(_id)
    return{"data":data}
    

if __name__ == "__Main1__":
    uvicorn.run("Main1:app",host="127.0.0.1",reload=True)

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:4200",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)