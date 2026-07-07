from database import get_db
from fastapi import APIRouter, Depends, HTTPException
from models import Product
from schemas import ProductCreate
from sqlalchemy.orm import Session

router = APIRouter(prefix="/products", tags=["products"])


@router.post("")
def add_product(product: ProductCreate, db: Session = Depends(get_db)):
    new_product = Product(name=product.name, price=product.price, image=product.image)

    db.add(new_product)
    db.commit()
    db.refresh(new_product)

    return {"success": True, "message": "Product Saved"}


@router.get("")
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()


@router.put("/{id}")
def update_product(id: int, product: ProductCreate, db: Session = Depends(get_db)):

    existing_product = db.query(Product).filter(Product.id == id).first()

    if not existing_product:
        raise HTTPException(status_code=404, detail="Product Not Found")

   
    existing_product.name = product.name
    existing_product.price = product.price
    existing_product.image = product.image

    db.commit()

    return {"success": True, "message": "Product Updated"}


@router.delete("/{id}")
def delete_product(id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == id).first()

    if not product:
        raise HTTPException(status_code=404, detail="Product Not Found")

    db.delete(product)
    db.commit()

    return {"success": True, "message": "Product Deleted"}
