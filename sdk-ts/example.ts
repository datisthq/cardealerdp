import type { Car, Dealer, Package } from "./index.ts"

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
  lon: -118.3267,
}

// Create car listings
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
}

// Create the package
const dataPackage: Package = {
  resources: [
    {
      name: "car",
      data: [car],
      schema:
        "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.2.2/extension/schemas/car.json",
    },
    {
      name: "dealer",
      data: [dealer],
      schema:
        "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.2.2/extension/schemas/dealer.json",
    },
  ],
}

console.log(dataPackage)
