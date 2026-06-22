from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"]
)

class User(BaseModel):
    email: str

@app.post("/login")
def login(user: User):

    if "@gmail.com" not in user.email:
        return {
            "message": "Wrong Email"
        }

    if os.path.exists("users.json"):
        with open("users.json", "r") as file:
            data = json.load(file)
    else:
        data = []

    for item in data:
        if item["email"] == user.email:
            return {
                "message": "Welcome Back"
            }

    data.append({
        "email": user.email
    })

    with open("users.json", "w") as file:
        json.dump(data, file )

    return {
        "message": "Account Created"
    }