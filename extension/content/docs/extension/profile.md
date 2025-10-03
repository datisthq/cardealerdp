---
title: Profile
---

*path: #*

&#36;schema: [http://json-schema.org/draft-07/schema](http://json-schema.org/draft-07/schema)

# definitions

***Package***

 - Type: `object`
 - <i id="definitionspackage">path: #/definitions/Package</i>
 - ***Properties***
	 - <b id="definitionspackagepropertiesdealer">dealer</b> `required`
		 - <i id="definitionspackagepropertiesdealer">path: #/definitions/Package/properties/dealer</i>
		 - &#36;ref: [#/definitions/Dealer](#/definitions/Dealer)
	 - <b id="definitionspackagepropertiesresources">resources</b> `required`
		 - Type: `array`
		 - <i id="definitionspackagepropertiesresources">path: #/definitions/Package/properties/resources</i>
		 - Item Count: between 1 and 1

			 - ***Items***
			 - <i id="definitionspackagepropertiesresourcesitems">path: #/definitions/Package/properties/resources/items</i>
			 - &#36;ref: [#/definitions/Resource](#/definitions/Resource)
***Dealer***

 - Type: `object`
 - <i id="definitionsdealer">path: #/definitions/Dealer</i>
 - ***Properties***
	 - <b id="definitionsdealerpropertiestitle">title</b> `required`
		 - Type: `string`
		 - <i id="definitionsdealerpropertiestitle">path: #/definitions/Dealer/properties/title</i>
	 - <b id="definitionsdealerpropertiesurl">url</b>
		 - Type: `string`
		 - <i id="definitionsdealerpropertiesurl">path: #/definitions/Dealer/properties/url</i>
***Resource***

 - Type: `object`
 - <i id="definitionsresource">path: #/definitions/Resource</i>
 - ***Properties***
	 - <b id="definitionsresourcepropertiesname">name</b> `required`
		 - <i id="definitionsresourcepropertiesname">path: #/definitions/Resource/properties/name</i>
		 - Constant value: *"car"*
	 - <b id="definitionsresourcepropertiesschema">schema</b> `required`
		 - <i id="definitionsresourcepropertiesschema">path: #/definitions/Resource/properties/schema</i>
		 - &#36;ref: [#/definitions/Schema](#/definitions/Schema)
***Schema***

 - <i id="definitionsschema">path: #/definitions/Schema</i>
 - Constant value: *"https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/schemas/car.json"*

*Generated with [OntoDevelopment/json-schema-doc-ts](https://github.com/OntoDevelopment/json-schema-doc-ts)*
