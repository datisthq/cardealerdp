# ruff: noqa -- DO NOT UPDATE this @generated file

from __future__ import annotations

from typing import Any, Dict, List, Literal, Union

from pydantic import BaseModel, Field, RootModel


class CarResource(BaseModel):
    name: Literal['car']
    data: List[Dict[str, Any]] = Field(
        ...,
        description='Data items have to conform to the Car table schema',
        min_length=1,
    )
    schema_: Literal[
        'https://raw.githubusercontent.com/datisthq/cardealerdp/v0.2.7/extension/schemas/car.json'
    ] = Field(..., alias='schema')


class DealerResource(BaseModel):
    name: Literal['dealer']
    data: List[Dict[str, Any]] = Field(
        ...,
        description='Data items have to conform to the Dealer table schema',
        max_length=1,
        min_length=1,
    )
    schema_: Literal[
        'https://raw.githubusercontent.com/datisthq/cardealerdp/v0.2.7/extension/schemas/dealer.json'
    ] = Field(..., alias='schema')


class ShowroomResource(BaseModel):
    name: Literal['showroom']
    data: List[Dict[str, Any]] = Field(
        ...,
        description='Data items have to conform to the Showroom table schema',
        min_length=1,
    )
    schema_: Literal[
        'https://raw.githubusercontent.com/datisthq/cardealerdp/v0.2.7/extension/schemas/showroom.json'
    ] = Field(..., alias='schema')


class Resource(RootModel[Union[CarResource, DealerResource, ShowroomResource]]):
    root: Union[CarResource, DealerResource, ShowroomResource]


class Package(BaseModel):
    field_schema: Literal[
        'https://raw.githubusercontent.com/datisthq/cardealerdp/v0.2.7/extension/profile.json'
    ] = Field(..., alias='$schema')
    resources: List[Resource] = Field(..., min_length=1)


CarDealerDataPackageProfile = Package
