---
title: Software
sidebar:
  order: 2
---

Cardealer DP provides SDKs for Python and TypeScript/JavaScript to make it easy to publish and consume car dealership data packages.

## Installation

### Python

```bash
pip install cardealerdp
```

### TypeScript

```bash
npm install cardealerdp
# or
yarn add cardealerdp
```

## Publishing Data

### Python Example

```python
from cardealerdp import Package
from cardealerdp.schemas import Car, Dealer, Showroom

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
    lon=-118.3267
)

# Create car listings
cars = [
    Car(
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
        battery=75
    ),
    Car(
        title="2022 BMW X5 xDrive40i",
        url="https://www.premiumauto.com/cars/bmw-x5-2022",
        price=62500,
        currency="USD",
        year=2022,
        mileage=24500,
        brand="BMW",
        model="X5",
        version="xDrive40i",
        fuel="petrol",
        gearbox="auto",
        category="suv",
        color="black",
        door="fourfive",
        power=335,
        cubics=2998,
        seats=5
    )
]

# Create the package
package = Package(
    resources=[
        {
            "name": "dealer",
            "schema": "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/dealer.json",
            "data": [dealer.model_dump()]
        },
        {
            "name": "car",
            "schema": "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/car.json",
            "data": [car.model_dump() for car in cars]
        }
    ]
)

# Export to JSON file
with open("dealership.json", "w") as f:
    f.write(package.model_dump_json(indent=2, by_alias=True))

print("Data package created successfully!")
```

### TypeScript Example

```typescript
import type { Package, Car, Dealer, Showroom } from 'cardealerdp';
import { writeFileSync } from 'fs';

// Create dealer information
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
  lon: -118.3267
};

// Create car listings
const cars: Car[] = [
  {
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
    battery: 75
  },
  {
    title: "2022 BMW X5 xDrive40i",
    url: "https://www.premiumauto.com/cars/bmw-x5-2022",
    price: 62500,
    currency: "USD",
    year: 2022,
    mileage: 24500,
    brand: "BMW",
    model: "X5",
    version: "xDrive40i",
    fuel: "petrol",
    gearbox: "auto",
    category: "suv",
    color: "black",
    door: "fourfive",
    power: 335,
    cubics: 2998,
    seats: 5
  }
];

// Create the package
const dataPackage: Package = {
  resources: [
    {
      name: "dealer",
      schema: "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/dealer.json",
      data: [dealer]
    },
    {
      name: "car",
      schema: "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/car.json",
      data: cars
    }
  ]
};

// Export to JSON file
writeFileSync("dealership.json", JSON.stringify(dataPackage, null, 2));

console.log("Data package created successfully!");
```

## Consuming Data

### Python Example

```python
from cardealerdp import Package
from cardealerdp.schemas import Car, Dealer
import json

# Load the data package
with open("dealership.json", "r") as f:
    data = json.load(f)
    package = Package(**data)

# Access dealer information
dealer_resource = next(r for r in package.resources if r.root.name == "dealer")
dealer_data = dealer_resource.root.data[0]
dealer = Dealer(**dealer_data)

print(f"Dealer: {dealer.title}")
print(f"Location: {dealer.city}, {dealer.region}")
print(f"Website: {dealer.url}")
print()

# Access car listings
car_resource = next(r for r in package.resources if r.root.name == "car")
cars = [Car(**car_data) for car_data in car_resource.root.data]

print(f"Available Cars: {len(cars)}")
for car in cars:
    print(f"- {car.title}")
    print(f"  Price: ${car.price:,} {car.currency}")
    print(f"  Year: {car.year}, Mileage: {car.mileage:,} km")
    print(f"  Fuel: {car.fuel}, Gearbox: {car.gearbox}")
    print()
```

### TypeScript Example

```typescript
import type { Package, Car, Dealer } from 'cardealerdp';
import { readFileSync } from 'fs';

// Load the data package
const rawData = readFileSync("dealership.json", "utf-8");
const dataPackage: Package = JSON.parse(rawData);

// Access dealer information
const dealerResource = dataPackage.resources?.find(r => r.name === "dealer");
const dealer = dealerResource?.data?.[0] as Dealer;

console.log(`Dealer: ${dealer.title}`);
console.log(`Location: ${dealer.city}, ${dealer.region}`);
console.log(`Website: ${dealer.url}`);
console.log();

// Access car listings
const carResource = dataPackage.resources?.find(r => r.name === "car");
const cars = (carResource?.data || []) as Car[];

console.log(`Available Cars: ${cars.length}`);
for (const car of cars) {
  console.log(`- ${car.title}`);
  console.log(`  Price: $${car.price.toLocaleString()} ${car.currency}`);
  console.log(`  Year: ${car.year}, Mileage: ${car.mileage.toLocaleString()} km`);
  console.log(`  Fuel: ${car.fuel}, Gearbox: ${car.gearbox}`);
  console.log();
}
```

## Validation

Both SDKs provide built-in validation to ensure data conforms to the schema.

### Python Validation

```python
from cardealerdp.schemas import Car
from pydantic import ValidationError

try:
    # This will fail validation - missing required fields
    invalid_car = Car(
        title="2023 Tesla Model 3",
        url="https://example.com/car"
    )
except ValidationError as e:
    print("Validation error:")
    print(e)
```

### TypeScript Validation

For runtime validation in TypeScript, you can use libraries like [Zod](https://zod.dev/) or [AJV](https://ajv.js.org/) with the JSON schemas:

```typescript
import Ajv from 'ajv';
import type { Car } from 'cardealerdp';

const ajv = new Ajv();

// Fetch the car schema
const carSchemaUrl = "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/car.json";

// Validate car data
const validate = ajv.compile(carSchema);

const carData: Partial<Car> = {
  title: "2023 Tesla Model 3",
  url: "https://example.com/car"
  // Missing required fields
};

if (!validate(carData)) {
  console.log("Validation errors:", validate.errors);
}
```
