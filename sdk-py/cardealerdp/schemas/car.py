# ruff: noqa -- DO NOT UPDATE this @generated file

from __future__ import annotations

from typing import Optional

from pydantic import BaseModel, Field, confloat, conint


class Car(BaseModel):
    showroomId: Optional[str] = Field(
        None,
        description="Unique identifier for the showroom where the car is located. If not provided the car is located at the dealers's main address",
    )
    title: str = Field(..., description='The title or name of the car listing')
    url: str = Field(..., description='URL to the car listing')
    price: confloat(ge=0.0) = Field(
        ..., description='The price of the car in the currency specified'
    )
    currency: str = Field(..., description='Currency of the price')
    year: Optional[conint(ge=1900)] = Field(
        None, description='Year of first registration (1900-2100)'
    )
    mileage: conint(ge=0) = Field(..., description='Odometer reading in kilometers')
    brand: str = Field(..., description='Car brand/manufacturer')
    model: str = Field(..., description='Car model name')
    version: str = Field(..., description='Specific version or trim level')
    fuel: str = Field(..., description='Fuel type')
    gearbox: str = Field(..., description='Transmission type')
    category: str = Field(..., description='Vehicle category/body type')
    color: str = Field(..., description='Exterior color')
    door: str = Field(..., description='Number of doors identifier')
    power: Optional[int] = Field(None, description='Engine power in horsepower')
    cubics: Optional[int] = Field(
        None, description='Engine displacement in cubic centimeters'
    )
    seats: Optional[int] = Field(None, description='Number of seats')
    owners: Optional[int] = Field(None, description='Number of previous owners')
    month: Optional[conint(ge=1, le=12)] = Field(
        None, description='Month of first registration (1-12)'
    )
    warranty: Optional[int] = Field(None, description='Warranty duration in months')
    range: Optional[int] = Field(
        None, description='Electric vehicle range in kilometers'
    )
    battery: Optional[int] = Field(
        None, description='Battery capacity in kWh for electric vehicles'
    )
    plate: Optional[str] = Field(None, description='License plate number')
    vin: Optional[str] = Field(None, description='Vehicle Identification Number')
