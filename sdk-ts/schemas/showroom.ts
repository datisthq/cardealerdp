// biome-ignore-all lint: DO NOT UPDATE this @generated file

/**
 * A schema describing a car dealer showroom
 */
export interface Showroom {
  /**
   * Unique identifier for the showroom
   */
  id: string;
  /**
   * The name of the showroom
   */
  title: string;
  /**
   * Country where the showroom is located
   */
  country: string;
  /**
   * State or region within the country
   */
  region: string;
  /**
   * Closest city where the showroom is located
   */
  city: string;
  /**
   * Street address of the showroom
   */
  address: string;
  /**
   * Contact phone number for the showroom
   */
  phone?: string;
  /**
   * Contact email address for the showroom
   */
  email?: string;
  /**
   * Website URL of the showroom
   */
  website?: string;
  /**
   * Longitude coordinate of the showroom location
   */
  lon?: number;
  /**
   * Latitude coordinate of the showroom location
   */
  lat?: number;
}
