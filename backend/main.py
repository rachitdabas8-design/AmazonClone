from database import SessionLocal, engine, get_db
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import Base, User, Cart
from schemas import UserCreate, CartItem
from sqlalchemy.orm import Session

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/login")
def login(user: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        return {
            "success": True,
            "message": "Welcome Back",
            "user_id": existing_user.id
        }

    new_user = User(email=user.email)

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "success": True,
        "message": "Account Created",
        "user_id": new_user.id
    }


@app.post("/cart")
def add_cart(item: CartItem, db: Session = Depends(get_db)):

    product = Cart(
        user_id=item.user_id,
        name=item.name,
        price=item.price,
        image=item.image
    )

    db.add(product)
    db.commit()
    db.refresh(product)

    return {"message": "Product Added Successfully"}


@app.get("/cart/{user_id}")
def get_cart(user_id: int, db: Session = Depends(get_db)):

    products = db.query(Cart).filter(Cart.user_id == user_id).all()

    return products


@app.delete("/cart/{id}")
def delete_cart(id: int, db: Session = Depends(get_db)):

    product = db.query(Cart).filter(Cart.id == id).first()

    if product:
        db.delete(product)
        db.commit()
        return {"message": "Product Deleted"}

    return {"message": "Product Not Found"}