from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from database import get_db
from schemas import AddressCreate
from models import Address

router = APIRouter(
    prefix= "/address",
    tags=["address"]
)

@router.put("/{email}")
def save_address(email: str, address: AddressCreate, db: Session = Depends(get_db)):

    existing_address = db.query(Address).filter(
        Address.user_email == email
    ).first()

    # ---------------- UPDATE ----------------
    if existing_address:

        existing_address.full_name = address.full_name
        existing_address.mobile = address.mobile
        existing_address.house = address.house
        existing_address.city = address.city
        existing_address.pincode = address.pincode

    # ---------------- CREATE ----------------
    else:

        new_address = Address(
            user_email=email,
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
