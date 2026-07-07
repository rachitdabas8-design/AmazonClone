from pydantic import BaseModel


# ---------------- USER SCHEMA ----------------
class UserCreate(BaseModel):
    email: str
    password: str





class AddressCreate(BaseModel):
    full_name: str
    mobile: str
    house: str
    city: str
    pincode: str

# ---------------- CART SCHEMA ----------------
class CartItem(BaseModel):
    user_id: int
    name: str
    price: int
    image: str


class ProductCreate(BaseModel):
    name: str
    price: int
    image: str
