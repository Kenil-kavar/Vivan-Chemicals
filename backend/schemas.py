from typing import Optional

from pydantic import BaseModel


class ContactUsCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: str


class FreeSampleCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    address: str
    product: str
