// biome-ignore-all lint: DO NOT UPDATE this @generated file

export type CarDealerDataPackageProfile = Package;
export type Resource = CarResource;
/**
 * Data items have to conform to the Car data schema
 */
export type Data = [] | [{}];
export type Schema = "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/extension/schemas/car.json";

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
  data?: Data;
  schema: Schema;
}
