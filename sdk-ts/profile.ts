// biome-ignore-all format: DO NOT UPDATE this @generated file

export type CarDealerDataPackageProfile = Package
export type Resource = CarResource | DealerResource | ShowroomResource

export interface Package {
  resources: [] | [Resource]
}
export interface CarResource {
  name: "car"
  /**
   * Data items have to conform to the Car table schema
   */
  data?: [] | [{}]
  schema: "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.3/extension/schemas/car.json"
}
export interface DealerResource {
  name: "dealer"
  /**
   * Data items have to conform to the Dealer table schema
   *
   * @minItems 1
   * @maxItems 1
   */
  data?: [{}]
  schema: "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.3/extension/schemas/dealer.json"
}
export interface ShowroomResource {
  name: "showroom"
  /**
   * Data items have to conform to the Showroom table schema
   */
  data?: [] | [{}]
  schema: "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.3/extension/schemas/showroom.json"
}
