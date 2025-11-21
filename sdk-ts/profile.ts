// biome-ignore-all format: DO NOT UPDATE this @generated file

export type CarDealerDataPackageProfile = Package
export type Resource = CarResource | DealerResource | ShowroomResource

export interface Package {
  $schema: "https://datisthq.github.io/cardealerdp/extension/v0.3.3/profile.json"
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
  schema: "https://datisthq.github.io/cardealerdp/extension/v0.3.3/schemas/car.json"
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
  schema: "https://datisthq.github.io/cardealerdp/extension/v0.3.3/schemas/dealer.json"
}
export interface ShowroomResource {
  name: "showroom"
  /**
   * Data items have to conform to the Showroom table schema
   *
   * @minItems 1
   */
  data: [{}, ...{}[]]
  schema: "https://datisthq.github.io/cardealerdp/extension/v0.3.3/schemas/showroom.json"
}
