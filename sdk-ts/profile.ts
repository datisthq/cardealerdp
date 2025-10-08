// biome-ignore-all format: DO NOT UPDATE this @generated file

export type CarDealerDataPackageProfile = Package
export type Resource = CarResource | DealerResource | ShowroomResource

export interface Package {
  $schema: "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.2.3/extension/profile.json"
  /**
   * @minItems 1
   */
  resources: [Resource, ...Resource[]]
}
export interface CarResource {
  name: "car"
  /**
   * Data items have to conform to the Car table schema
   *
   * @minItems 1
   */
  data: [{}, ...{}[]]
  schema: "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.2.4/extension/schemas/car.json"
}
export interface DealerResource {
  name: "dealer"
  /**
   * Data items have to conform to the Dealer table schema
   *
   * @minItems 1
   * @maxItems 1
   */
  data: [{}]
  schema: "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.2.4/extension/schemas/dealer.json"
}
export interface ShowroomResource {
  name: "showroom"
  /**
   * Data items have to conform to the Showroom table schema
   *
   * @minItems 1
   */
  data: [{}, ...{}[]]
  schema: "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.2.4/extension/schemas/showroom.json"
}
