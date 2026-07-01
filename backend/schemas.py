from pydantic import BaseModel
from typing import Optional


# ---------------- USER SCHEMA ----------------
class UserCreate(BaseModel):
    email: str
class AddressCreate(BaseModel):
    full_name: str
    mobile: str
    house: str
    city: str
    pincode: str

# ---------------- CART SCHEMA ----------------
class CartItem(BaseModel):
    name: str
    price: int
    image: str