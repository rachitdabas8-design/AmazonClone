from database import Base
from sqlalchemy import Column, ForeignKey, Integer, String


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)


class Address(Base):
    __tablename__ = "address"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))

    full_name = Column(String)
    mobile = Column(String)
    house = Column(String)
    city = Column(String)
    pincode = Column(String)

class Cart(Base):
    __tablename__ = "cart"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(String, ForeignKey("users.id"))

    name = Column(String)
    price = Column(Integer)
    image = Column(String)