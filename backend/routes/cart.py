from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Cart
from schemas import CartItem

router = APIRouter(
    prefix="/cart", 
    tags=["cart"])


@router.post("")
def add_cart(item: CartItem, db: Session = Depends(get_db)):

    product = Cart(name=item.name, price=item.price, image=item.image)

    db.add(product)
    db.commit()
    db.refresh(product)

    return {"message": "Product Added Successfully"}


@router.get("")
def get_cart(db: Session = Depends(get_db)):
    return db.query(Cart).all()


@router.delete("/{id}")
def delete_cart(id: int, db: Session = Depends(get_db)):

    product = db.query(Cart).filter(Cart.id == id).first()

    if product:
        db.delete(product)
        db.commit()
        return {"message": "Product Deleted"}

    raise HTTPException(status_code=404, detail="Product Not Found")
