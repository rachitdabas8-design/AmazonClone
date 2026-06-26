from pydantic import BaseModel

class UserCreate(BaseModel):
    email: str


class CartItem(BaseModel):
   
    name: str
    price: int
    image: str