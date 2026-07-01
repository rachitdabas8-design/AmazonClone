from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)


class Address(Base):
    __tablename__ = "address"

    id = Column(Integer, primary_key=True, index=True)
    user_email = Column(String, ForeignKey("users.email"))

    full_name = Column(String)
    mobile = Column(String)
    house = Column(String)
    city = Column(String)
    pincode = Column(String)

class Cart(Base):
    __tablename__ = "cart"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String)
    price = Column(Integer)
    image = Column(String)