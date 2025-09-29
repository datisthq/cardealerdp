import * as z from "zod"
import { carSchema } from "../schemas/car.ts"

export const CarResource = z.object({
  schema: z.literal(carSchema as any),
})

export const Resource = z.union([CarResource])
