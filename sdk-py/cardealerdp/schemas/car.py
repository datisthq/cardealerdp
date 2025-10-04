# ruff: noqa -- DO NOT UPDATE this @generated file

from __future__ import annotations

from typing import Optional

from pydantic import BaseModel, Field, confloat, conint


class Car(BaseModel):
    title: str = Field(..., description='The title or name of the car listing')
    url: str = Field(..., description='URL to the car listing')
    price: confloat(ge=0.0) = Field(..., description='The price of the car in euros')
    year: int = Field(..., description='Manufacturing year of the car')
    mileage: conint(ge=0) = Field(..., description='Odometer reading in kilometers')
    brand: Optional[str] = Field(None, description='Car brand/manufacturer')
    model: Optional[str] = Field(None, description='Car model name')
    version: Optional[str] = Field(None, description='Specific version or trim level')
    fuel: Optional[str] = Field(None, description='Fuel type')
    gearbox: Optional[str] = Field(None, description='Transmission type')
    category: Optional[str] = Field(None, description='Vehicle category/body type')
    color: Optional[str] = Field(None, description='Exterior color')
    door: Optional[str] = Field(None, description='Number of doors')
    power: Optional[int] = Field(
        None, description='Engine power in horsepower or kilowatts'
    )
    cubics: Optional[int] = Field(
        None, description='Engine displacement in cubic centimeters'
    )
    seats: Optional[int] = Field(None, description='Number of seats')
    owners: Optional[int] = Field(None, description='Number of previous owners')
    month: Optional[int] = Field(None, description='Month of first registration (1-12)')
    warranty: Optional[int] = Field(None, description='Warranty duration in months')
    range: Optional[int] = Field(
        None, description='Electric vehicle range in kilometers'
    )
    battery: Optional[int] = Field(
        None, description='Battery capacity in kWh for electric vehicles'
    )
    address: Optional[str] = Field(
        None, description='Street address where the car is located'
    )
    region: Optional[str] = Field(
        None, description='State or region where the car is located'
    )
    city: Optional[str] = Field(None, description='City where the car is located')
    postcode: Optional[str] = Field(None, description='Postal code of the car location')
    lat: Optional[float] = Field(
        None, description='Latitude coordinate of the car location'
    )
    lon: Optional[float] = Field(
        None, description='Longitude coordinate of the car location'
    )
    dealer: Optional[str] = Field(None, description='Name of the dealer or seller')
    plate: Optional[str] = Field(None, description='License plate number')
    vin: Optional[str] = Field(None, description='Vehicle Identification Number')
