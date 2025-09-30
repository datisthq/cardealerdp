import { z } from "zod"

export default z.object({ "dealer": z.object({ "title": z.string(), "url": z.string().optional() }), "resources": z.tuple([z.object({ "name": z.literal("car"), "schema": z.literal("https://raw.githubusercontent.com/datisthq/cardealerdp/v0.1.1/schemas/car.json") })]) })
