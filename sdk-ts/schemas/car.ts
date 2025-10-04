// biome-ignore-all lint: DO NOT UPDATE this @generated file

/**
 * A schema describing a car
 */
export interface Car {
  /**
   * The title or name of the car listing
   */
  title: string;
  /**
   * URL to the car listing
   */
  url: string;
  /**
   * The price of the car in euros
   */
  price: number;
  /**
   * Manufacturing year of the car
   */
  year: number;
  /**
   * Odometer reading in kilometers
   */
  mileage: number;
  /**
   * Car brand/manufacturer
   */
  brand?: string;
  /**
   * Car model name
   */
  model?: string;
  /**
   * Specific version or trim level
   */
  version?: string;
  /**
   * Fuel type
   */
  fuel?: string;
  /**
   * Transmission type
   */
  gearbox?: string;
  /**
   * Vehicle category/body type
   */
  category?: string;
  /**
   * Exterior color
   */
  color?: string;
  /**
   * Number of doors
   */
  door?: string;
  /**
   * Engine power in horsepower or kilowatts
   */
  power?: number;
  /**
   * Engine displacement in cubic centimeters
   */
  cubics?: number;
  /**
   * Number of seats
   */
  seats?: number;
  /**
   * Number of previous owners
   */
  owners?: number;
  /**
   * Month of first registration (1-12)
   */
  month?: number;
  /**
   * Warranty duration in months
   */
  warranty?: number;
  /**
   * Electric vehicle range in kilometers
   */
  range?: number;
  /**
   * Battery capacity in kWh for electric vehicles
   */
  battery?: number;
  /**
   * Street address where the car is located
   */
  address?: string;
  /**
   * State or region where the car is located
   */
  region?: string;
  /**
   * City where the car is located
   */
  city?: string;
  /**
   * Postal code of the car location
   */
  postcode?: string;
  /**
   * Latitude coordinate of the car location
   */
  lat?: number;
  /**
   * Longitude coordinate of the car location
   */
  lon?: number;
  /**
   * Name of the dealer or seller
   */
  dealer?: string;
  /**
   * License plate number
   */
  plate?: string;
  /**
   * Vehicle Identification Number
   */
  vin?: string;
}
