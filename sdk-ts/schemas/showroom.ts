// biome-ignore-all format: DO NOT UPDATE this @generated file

/**
 * A schema describing a car dealer showroom
 */
export interface Showroom {
  /**
   * Unique identifier of the showroom
   */
  id: string
  /**
   * The name of the showroom
   */
  title: string
  /**
   * Country where the showroom is located
   */
  country: string
  /**
   * State or region within the country
   */
  region: string
  /**
   * Closest city where the showroom is located
   */
  city: string
  /**
   * Street address of the showroom
   */
  address: string
  /**
   * Postal code of the showroom location
   */
  postcode?: string
  /**
   * Contact phone number for the showroom
   */
  phone?: string
  /**
   * Contact email address for the showroom
   */
  email?: string
  /**
   * URL to the showroom
   */
  url?: string
  /**
   * Longitude coordinate of the showroom location
   */
  lon?: number
  /**
   * Latitude coordinate of the showroom location
   */
  lat?: number
}
