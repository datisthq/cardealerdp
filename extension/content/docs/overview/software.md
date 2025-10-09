---
title: Software
sidebar:
  order: 2
---

Cardealer DP provides SDKs for Python and TypeScript/JavaScript to make it easy to publish and consume Car Dealer Data Packages.

## Python

:::note
In addition to the Python SDK, we recommend using [frictionless-py](https://framework.frictionlessdata.io/) to manage your data packages. For example, using it you can publish your data pacakge directory to Zenodo instead of saving it locally, as well, as consume it from a remote server.
:::

### Installation

```bash
pip install cardealerdp frictionless
```

### Publication

```python
from cardealerdp import Package, Car, Dealer
import frictionless

# Create dealer information
dealer = Dealer(
    title="Premium Auto Sales",
    country="United States",
    region="California",
    city="Los Angeles",
    address="1234 Sunset Boulevard",
    postcode="90028",
    phone="+1-323-555-0100",
    email="sales@premiumauto.com",
    url="https://www.premiumauto.com",
    lat=34.0983,
    lon=-118.3267,
)

# Create car listings
car = Car(
    title="2023 Tesla Model 3 Long Range",
    url="https://www.premiumauto.com/cars/tesla-model-3-2023",
    price=45990,
    currency="USD",
    year=2023,
    mileage=12000,
    brand="Tesla",
    model="Model 3",
    version="Long Range AWD",
    fuel="electric",
    gearbox="auto",
    category="saloon",
    color="white",
    door="fourfive",
    power=346,
    seats=5,
    range=358,
    battery=75,
)

package = Package(
    {
        "$schema": "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.3.1/extension/profile.json",
        "resources": [
            {
                "name": "car",
                "data": [car],
                "schema": "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.3.1/extension/schemas/car.json",
            },
            {
                "name": "dealer",
                "data": [dealer],
                "schema": "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.3.1/extension/schemas/dealer.json",
            },
        ],
    }
)

frictionless.Package(package).to_json("cardealer.json")
```

### Validation

```python
import frictionless

report = frictionless.validate("cardealer.json")
print(report)
```

### Consumption

```python
import frictionless

package = frictionless.Package("cardealer.json")
print(package)
```

## TypeScript

:::note
In addition to the TypeScript SDK, we recommend using [dpkit](https://dpkit.dev/) to manage your data packages. For example, using it you can publish your data pacakge directory to Zenodo instead of saving it locally, as well, as consumte it from a remote server.
:::

### Installation

```bash
npm install cardealerdp dpkit
```

### Publication

```typescript
import type { Car, Dealer, Package } from "cardealerdp";
import { savePackageDescriptor } from "dpkit";

const dealer: Dealer = {
	title: "Premium Auto Sales",
	country: "United States",
	region: "California",
	city: "Los Angeles",
	address: "1234 Sunset Boulevard",
	postcode: "90028",
	phone: "+1-323-555-0100",
	email: "sales@premiumauto.com",
	url: "https://www.premiumauto.com",
	lat: 34.0983,
	lon: -118.3267,
};

const car: Car = {
	title: "2023 Tesla Model 3 Long Range",
	url: "https://www.premiumauto.com/cars/tesla-model-3-2023",
	price: 45990,
	currency: "USD",
	year: 2023,
	mileage: 12000,
	brand: "Tesla",
	model: "Model 3",
	version: "Long Range AWD",
	fuel: "electric",
	gearbox: "auto",
	category: "saloon",
	color: "white",
	door: "fourfive",
	power: 346,
	seats: 5,
	range: 358,
	battery: 75,
};

const dataPackage: Package = {
	$schema:
		"https://raw.githubusercontent.com/datisthq/cardealerdp/v0.3.1/extension/profile.json",
	resources: [
		{
			name: "car",
			data: [car],
			schema:
				"https://raw.githubusercontent.com/datisthq/cardealerdp/v0.3.1/extension/schemas/car.json",
		},
		{
			name: "dealer",
			data: [dealer],
			schema:
				"https://raw.githubusercontent.com/datisthq/cardealerdp/v0.3.1/extension/schemas/dealer.json",
		},
	],
};

await savePackageDescriptor(dataPackage, {
	path: "cardealer.json",
	overwrite: true,
});
```

### Validation

```typescript
import { validatePackage } from "dpkit";

const { valid, errors } = await validatePackage("cardealer.json");
console.log(valid, errors);
```

### Consumption

```typescript
import { loadPackageDescriptor } from "dpkit";

const dataPackage = await loadPackageDescriptor("cardealer.json");
console.log(dataPackage);
```

## Command-Line

:::note
As an alternative to [dpkit](https://dpkit.dev/), you can use [frictionless-py](https://framework.frictionlessdata.io/) to manage your data packages in Command-Line.
:::

### Installation

```bash
curl -fsSL https://dpkit.dev/install.sh | sh
```


### Validation

```bash
./dp package validate cardealer.json
```

### Consumption

```bash
./dp table expore -p cardealer.json
```
