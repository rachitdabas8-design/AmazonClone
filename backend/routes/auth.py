from database import get_db
from fastapi import APIRouter, Depends
from models import Address, User
from schemas import UserCreate
from sqlalchemy.orm import Session

router = APIRouter(
    prefix="/login",
    tags=["Authentication"])




@router.post("")
def login(user: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    # USER EXISTS
    if existing_user:

        # PASSWORD CHECK
        if existing_user.password != user.password:
            return {
                "success": False,
                "message": "Wrong Password"
            }
        return {
        "success": True,
        "message": "Welcome Back",
        "user_id": existing_user.id
       }

        

    # NEW USER
    new_user = User(
        email=user.email,
        password=user.password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "success": True,
        "message": "Account Created",
        "user_id":new_user.id,
        # "email": new_user.email,
        "address": None
    }
