# ruff: noqa -- DO NOT UPDATE this @generated file

from __future__ import annotations

from typing import TypedDict

from typing_extensions import NotRequired


class Car(TypedDict):
    showroomId: NotRequired[str]
    """
    Unique identifier for the showroom where the car is located. If not provided the car is considered located at the dealers's main address
    """
    title: str
    """
    The title or name of the car listing
    """
    url: str
    """
    URL to the car listing
    """
    price: float
    """
    The price of the car in the currency specified
    """
    currency: str
    """
    Currency of the price
    """
    year: NotRequired[float]
    """
    Year of first registration (1900-2100)
    """
    mileage: float
    """
    Odometer reading in kilometers
    """
    brand: str
    """
    Car brand/manufacturer
    """
    model: str
    """
    Car model name
    """
    version: str
    """
    Specific version or trim level
    """
    fuel: str
    """
    Fuel type
    """
    gearbox: str
    """
    Transmission type
    """
    category: str
    """
    Vehicle category/body type
    """
    color: str
    """
    Exterior color
    """
    door: str
    """
    Number of doors identifier
    """
    power: NotRequired[float]
    """
    Engine power in horsepower
    """
    cubics: NotRequired[float]
    """
    Engine displacement in cubic centimeters
    """
    seats: NotRequired[float]
    """
    Number of seats
    """
    owners: NotRequired[float]
    """
    Number of previous owners
    """
    month: NotRequired[float]
    """
    Month of first registration (1-12)
    """
    warranty: NotRequired[float]
    """
    Warranty duration in months
    """
    range: NotRequired[float]
    """
    Electric vehicle range in kilometers
    """
    battery: NotRequired[float]
    """
    Battery capacity in kWh for electric vehicles
    """
    plate: NotRequired[str]
    """
    License plate number
    """
    vin: NotRequired[str]
    """
    Vehicle Identification Number
    """
