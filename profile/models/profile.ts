import * as z from "zod"
import { Package } from "./package.ts"

export const profile = {
  title: "Car Dealer Data Package Profile",
  allOf: [{ $ref: "https://datapackage.org/profiles/2.0/datapackage.json" }],
  ...z.toJSONSchema(Package, { target: "draft-7" }),
}
