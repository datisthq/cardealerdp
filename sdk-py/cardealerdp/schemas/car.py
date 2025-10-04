# ruff: noqa -- DO NOT UPDATE this @generated file

from __future__ import annotations

from pydantic import BaseModel, Field, confloat


class Car(BaseModel):
    title: str = Field(..., description='The title or name of the car listing')
    price: confloat(ge=0.0) = Field(..., description='The price of the car')
