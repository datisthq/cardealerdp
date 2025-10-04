// biome-ignore-all format: DO NOT UPDATE this @generated file

/**
 * A schema describing a car dealer
 */
export interface Dealer {
  /**
   * The name of the dealer
   */
  title: string
  /**
   * Country where the dealer is located
   */
  country: string
  /**
   * State or region within the country
   */
  region: string
  /**
   * Closest city where the dealer is located
   */
  city: string
  /**
   * Street address of the dealer
   */
  address: string
  /**
   * Postal code of the dealer location
   */
  postcode?: string
  /**
   * Contact phone number for the dealer
   */
  phone?: string
  /**
   * Contact email address for the dealer
   */
  email?: string
  /**
   * URL to the dealer website
   */
  url: string
  /**
   * Longitude coordinate of the dealer location
   */
  lon?: number
  /**
   * Latitude coordinate of the dealer location
   */
  lat?: number
}
