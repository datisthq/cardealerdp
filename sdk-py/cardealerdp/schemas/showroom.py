# ruff: noqa -- DO NOT UPDATE this @generated file

from __future__ import annotations

from typing import TypedDict

from typing_extensions import NotRequired


class Showroom(TypedDict):
    id: str
    """
    Unique identifier of the showroom
    """
    title: str
    """
    The name of the showroom
    """
    country: str
    """
    Country where the showroom is located
    """
    region: str
    """
    State or region within the country
    """
    city: str
    """
    Closest city where the showroom is located
    """
    address: str
    """
    Street address of the showroom
    """
    postcode: NotRequired[str]
    """
    Postal code of the showroom location
    """
    phone: NotRequired[str]
    """
    Contact phone number for the showroom
    """
    email: NotRequired[str]
    """
    Contact email address for the showroom
    """
    url: NotRequired[str]
    """
    URL to the showroom
    """
    lon: NotRequired[float]
    """
    Longitude coordinate of the showroom location
    """
    lat: NotRequired[float]
    """
    Latitude coordinate of the showroom location
    """
