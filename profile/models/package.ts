import * as z from "zod"
import { CarResource } from "./resource.ts"

export const Package = z.object({
  dealer: z.object({
    name: z.string(),
  }),
  resources: z.array(CarResource),
})
