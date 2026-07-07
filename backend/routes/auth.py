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

    if existing_user:

      
        if existing_user.password != user.password:
            return {
                "success": False,
                "message": "Wrong Password"
            }
        saved_address = db.query(Address).filter(
            Address.user_id == existing_user.id
        ).first()

        if saved_address:
            address = {
                "full_name": saved_address.full_name,
                "mobile": saved_address.mobile,
                "house": saved_address.house,
                "city": saved_address.city,
                "pincode": saved_address.pincode
            }
        else:
            address = None

        return {
        "success": True,
        "message": "Welcome Back",
        "user_id": existing_user.id,
        "address":address
       }

        

   
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
