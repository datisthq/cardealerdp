# ruff: noqa -- DO NOT UPDATE this @generated file

from __future__ import annotations

from typing import Any, Dict, List, Literal, Optional

from pydantic import BaseModel, Field, RootModel


class Dealer(BaseModel):
    title: str = Field(..., description='A title for the dealer')
    url: Optional[str] = None


class Data(RootModel[List[Dict[str, Any]]]):
    root: List[Dict[str, Any]] = Field(
        ..., description='Data items have to conform to the Car data schema'
    )


class Schema(
    RootModel[
        Literal[
            'https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/car.json'
        ]
    ]
):
    root: Literal[
        'https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/car.json'
    ]


class CarResource(BaseModel):
    name: Literal['car']
    data: Optional[Data] = None
    schema_: Schema = Field(..., alias='schema')


class Resource(RootModel[CarResource]):
    root: CarResource


class Package(BaseModel):
    dealer: Dealer
    resources: List[Resource] = Field(..., max_length=1, min_length=1)


CarDealerDataPackageProfile = Package
