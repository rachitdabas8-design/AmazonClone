from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from schemas import UserCreate
from models import User, Address

router = APIRouter(
    prefix="/login",
    tags=["Authentication"])


@router.post("")
def login(user: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(User.email == user.email).first()

    # USER EXISTS → RETURN ADDRESS
    if existing_user:
        address = db.query(Address).filter(Address.user_email == user.email).first()

        return {
            "success": True,
            "message": "Welcome Back",
            "email": existing_user.email,
            "address": address,   
        }

    # NEW USER CREATE
    new_user = User(email=user.email)

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "success": True,
        "message": "Account Created",
        "email": new_user.email,
        "address": None,
    }
