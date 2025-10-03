from dplib import Package as StandardPackage
from dplib import Resource as StandardResource
from dplib import Dialect

from .profile import Package as ExtensionPackage
from .profile import Resource as ExtensionResource
from .profile import Schema

from .schemas import *

class Resource(StandardResource, ExtensionResource):
    pass

class Package(StandardPackage, ExtensionPackage):
  resources: list[Resource]

__all__ = ["Package", "Resource", "Schema", "Dialect"]
