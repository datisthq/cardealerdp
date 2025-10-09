// biome-ignore-all format: DO NOT UPDATE this @generated file

/**
 * A schema describing a car
 */
export interface Car {
  /**
   * Unique identifier for the showroom where the car is located. If not provided the car is considered located at the dealers's main address
   */
  showroomId?: string
  /**
   * The title or name of the car listing
   */
  title: string
  /**
   * URL to the car listing
   */
  url: string
  /**
   * The price of the car in the currency specified
   */
  price: number
  /**
   * Currency of the price
   */
  currency: string
  /**
   * Year of first registration (1900-2100)
   */
  year?: number
  /**
   * Odometer reading in kilometers
   */
  mileage: number
  /**
   * Car brand/manufacturer
   */
  brand: string
  /**
   * Car model name
   */
  model: string
  /**
   * Specific version or trim level
   */
  version: string
  /**
   * Fuel type
   */
  fuel: string
  /**
   * Transmission type
   */
  gearbox: string
  /**
   * Vehicle category/body type
   */
  category: string
  /**
   * Exterior color
   */
  color: string
  /**
   * Number of doors identifier
   */
  door: string
  /**
   * Engine power in horsepower
   */
  power?: number
  /**
   * Engine displacement in cubic centimeters
   */
  cubics?: number
  /**
   * Number of seats
   */
  seats?: number
  /**
   * Number of previous owners
   */
  owners?: number
  /**
   * Month of first registration (1-12)
   */
  month?: number
  /**
   * Warranty duration in months
   */
  warranty?: number
  /**
   * Electric vehicle range in kilometers
   */
  range?: number
  /**
   * Battery capacity in kWh for electric vehicles
   */
  battery?: number
  /**
   * License plate number
   */
  plate?: string
  /**
   * Vehicle Identification Number
   */
  vin?: string
}
