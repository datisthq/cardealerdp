// biome-ignore-all lint: DO NOT UPDATE it is generated

export type CarDealerDataPackageProfile = Package;
/**
 * Data items have to be conformed to the Car data schema
 *
 * @minItems 1
 */
export type Data = [{}];
export type Schema = "https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.0/schemas/car.json";

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
export interface Resource {
  name: "car";
  data?: Data;
  schema: Schema;
}
