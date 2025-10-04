from dplib import Package as StandardPackage
from dplib import Resource as StandardResource

from .profile import Package as ExtensionPackage
from .profile import Resource as ExtensionResource

from .schemas import *

class Resource(StandardResource, ExtensionResource):
    pass

class Package(StandardPackage, ExtensionPackage):
  resources: list[Resource]

__all__ = ["Package", "Resource", "Schema", "Dialect"]
