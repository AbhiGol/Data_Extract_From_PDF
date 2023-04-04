from fastapi import FastAPI, status, Response

app = FastAPI()

users = {
    "Sender":{
        "id" : 32,
        "full_name" : "Abhi Gol"
    }
}

@app.get("/")
def  root():
    return{"Message" : "HelloWorld"}

@app.get("/user/{username}")
def get_user(username, response: Response):
    try:
        result = users[username]
    except KeyError:
        result = {"err":f"No such user: {username}"}
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
    return result
    