# ruff: noqa -- DO NOT UPDATE this @generated file

from __future__ import annotations

from typing import Any, Dict, List, Literal, Optional

from pydantic import BaseModel, Field, RootModel


class Dealer(BaseModel):
    title: str = Field(..., description='A title for the dealer')
    url: Optional[str] = None


class CarResource(BaseModel):
    name: Literal['car']
    data: Optional[List[Dict[str, Any]]] = Field(
        None, description='Data items have to conform to the Car table schema'
    )
    schema_: Literal[
        'https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/car.json'
    ] = Field(..., alias='schema')


class ShowroomResource(BaseModel):
    name: Literal['showroom']
    data: Optional[List[Any]] = Field(
        None, description='Data items have to conform to the Showroom table schema'
    )
    schema_: Literal[
        'https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/showroom.json'
    ] = Field(..., alias='schema')


class Resource(RootModel[CarResource]):
    root: CarResource


class Package(BaseModel):
    dealer: Dealer
    resources: List[Resource] = Field(..., max_length=1, min_length=1)


CarDealerDataPackageProfile = Package
