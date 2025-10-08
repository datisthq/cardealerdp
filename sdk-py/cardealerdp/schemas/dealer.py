# ruff: noqa -- DO NOT UPDATE this @generated file

from __future__ import annotations

from typing import TypedDict

from typing_extensions import NotRequired


class Dealer(TypedDict):
    title: str
    """
    The name of the dealer
    """
    country: str
    """
    Country where the dealer is located
    """
    region: str
    """
    State or region within the country
    """
    city: str
    """
    Closest city where the dealer is located
    """
    address: str
    """
    Street address of the dealer
    """
    postcode: NotRequired[str]
    """
    Postal code of the dealer location
    """
    phone: NotRequired[str]
    """
    Contact phone number for the dealer
    """
    email: NotRequired[str]
    """
    Contact email address for the dealer
    """
    url: str
    """
    URL to the dealer website
    """
    lon: NotRequired[float]
    """
    Longitude coordinate of the dealer location
    """
    lat: NotRequired[float]
    """
    Latitude coordinate of the dealer location
    """
