# ruff: noqa -- DO NOT UPDATE this @generated file

from __future__ import annotations

from typing import Optional

from pydantic import BaseModel, Field


class Dealer(BaseModel):
    title: str = Field(..., description='The name of the dealer')
    country: str = Field(..., description='Country where the dealer is located')
    region: str = Field(..., description='State or region within the country')
    city: str = Field(..., description='Closest city where the dealer is located')
    address: str = Field(..., description='Street address of the dealer')
    postcode: Optional[str] = Field(
        None, description='Postal code of the dealer location'
    )
    phone: Optional[str] = Field(
        None, description='Contact phone number for the dealer'
    )
    email: Optional[str] = Field(
        None, description='Contact email address for the dealer'
    )
    url: str = Field(..., description='URL to the dealer website')
    lon: Optional[float] = Field(
        None, description='Longitude coordinate of the dealer location'
    )
    lat: Optional[float] = Field(
        None, description='Latitude coordinate of the dealer location'
    )
