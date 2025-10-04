---
title: Metadata
---

## Definitions

- <a id="definitions/Package"></a>**`Package`** *(object)*
  - <a id="definitions/Package/properties/dealer"></a>**`dealer`** *(required)*: Refer to *[#/definitions/Dealer](#definitions/Dealer)*.
  - <a id="definitions/Package/properties/resources"></a>**`resources`** *(array, required)*: Length must be equal to 1.
    - **Items**:
        - <a id="definitions/Package/properties/resources/items/0"></a>: Refer to *[#/definitions/Resource](#definitions/Resource)*.
- <a id="definitions/Dealer"></a>**`Dealer`** *(object)*
  - <a id="definitions/Dealer/properties/title"></a>**`title`** *(string, required)*: A title for the dealer.
  - <a id="definitions/Dealer/properties/url"></a>**`url`** *(string)*
- <a id="definitions/Resource"></a>**`Resource`**: Refer to *[#/definitions/CarResource](#definitions/CarResource)*.
- <a id="definitions/CarResource"></a>**`CarResource`** *(object)*
  - <a id="definitions/CarResource/properties/name"></a>**`name`**: Must be: `"car"`.
  - <a id="definitions/CarResource/properties/data"></a>**`data`**: Refer to *[#/definitions/Data](#definitions/Data)*.
  - <a id="definitions/CarResource/properties/schema"></a>**`schema`** *(required)*: Refer to *[#/definitions/Schema](#definitions/Schema)*.
- <a id="definitions/Data"></a>**`Data`** *(array)*: Data items have to conform to the Car data schema.
  - **Items**:
      - <a id="definitions/Data/items/0"></a>*object*
- <a id="definitions/Schema"></a>**`Schema`**: Must be: `"https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/car.json"`.
