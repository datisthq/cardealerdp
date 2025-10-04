# ruff: noqa -- DO NOT UPDATE this @generated file

from __future__ import annotations

from typing import Optional

from pydantic import BaseModel, Field


class Showroom(BaseModel):
    id: str = Field(..., description='Unique identifier for the showroom')
    title: str = Field(..., description='The name of the showroom')
    country: str = Field(..., description='Country where the showroom is located')
    region: str = Field(..., description='State or region within the country')
    city: str = Field(..., description='Closest city where the showroom is located')
    address: str = Field(..., description='Street address of the showroom')
    postcode: Optional[str] = Field(
        None, description='Postal code of the showroom location'
    )
    phone: Optional[str] = Field(
        None, description='Contact phone number for the showroom'
    )
    email: Optional[str] = Field(
        None, description='Contact email address for the showroom'
    )
    url: Optional[str] = Field(None, description='URL to the showroom')
    lon: Optional[float] = Field(
        None, description='Longitude coordinate of the showroom location'
    )
    lat: Optional[float] = Field(
        None, description='Latitude coordinate of the showroom location'
    )
