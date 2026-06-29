from database import engine, get_db
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import Base, Cart, User
from schemas import CartItem, UserCreate
from sqlalchemy.orm import Session

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/login", status_code=200)
def login(user: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        return {"success": True, "message": "Welcome Back"}

    new_user = User(email=user.email)

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"success": True, "message": "Account Created"}


@app.post("/cart")
def add_cart(item: CartItem, db: Session = Depends(get_db)):

    product = Cart(name=item.name, price=item.price, image=item.image)

    db.add(product)
    db.commit()
    db.refresh(product)

    return {"message": "Product Added Successfully"}


@app.get("/cart")
def get_cart(db: Session = Depends(get_db)):

    products = db.query(Cart).all()

    return products



@app.delete("/cart/{id}")
def delete_cart(id:int, db: Session = Depends(get_db) ):
    product = db.query(Cart).filter(Cart.id == id).first()
    if product:
        db.delete(product)
        db.commit()
        return {"message": "Product Deleted"}
    raise HTTPException(status_code=404, details="Product Not Found")
