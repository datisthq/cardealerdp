import * as z from "zod"
import { Package } from "./models/package.ts"

const profile = z.toJSONSchema(Package, { target: "draft-7" })

profile.title = "Car Dealer Data Package Profile"
profile.allOf = [
  { $ref: "https://datapackage.org/profiles/2.0/datapackage.json" },
  { $ref: "package.json" },
]

console.log(JSON.stringify(profile, null, 2))
