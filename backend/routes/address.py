from database import get_db
from fastapi import APIRouter, Depends
from models import Address, User
from schemas import AddressCreate
from sqlalchemy.orm import Session

router = APIRouter(
    prefix= "/address",
    tags=["address"]
)

@router.put("/{email}")
def save_address(email: str, address: AddressCreate, db: Session = Depends(get_db)):

    user = db.query(User).filter(
        User.email == email
    ).first()

    existing_address = db.query(Address).filter(
        Address.user_id == user.id
    ).first()


    if existing_address:
        existing_address.full_name = address.full_name
        existing_address.mobile = address.mobile
        existing_address.house = address.house
        existing_address.city = address.city
        existing_address.pincode = address.pincode

    else:
        new_address = Address(
            user_id=user.id,
            full_name=address.full_name,
            mobile=address.mobile,
            house=address.house,
            city=address.city,
            pincode=address.pincode
        )

        db.add(new_address)

    db.commit()

    return {
        "success": True,
        "message": "Address Saved"
    }
