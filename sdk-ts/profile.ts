// biome-ignore-all lint: DO NOT UPDATE this @generated file

export type CarDealerDataPackageProfile = Package;
export type Resource = CarResource | ShowroomResource;

export interface Package {
  dealer: Dealer;
  /**
   * @minItems 1
   * @maxItems 1
   */
  resources: [Resource];
}
export interface Dealer {
  /**
   * A title for the dealer
   */
  title: string;
  url?: string;
}
export interface CarResource {
  name: "car";
  /**
   * Data items have to conform to the Car table schema
   */
  data?: [] | [{}];
  schema: "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/car.json";
}
export interface ShowroomResource {
  name: "showroom";
  /**
   * Data items have to conform to the Showroom table schema
   */
  data?: [] | [{}];
  schema: "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/showroom.json";
}
