import fs from "node:fs/promises"
import { join } from "node:path"
import { profile } from "../models/profile.ts"

const buildDir = join(import.meta.dirname, "..", "build")
await fs.mkdir(buildDir, { recursive: true })

await fs.writeFile(
  join(buildDir, "profile.json"),
  JSON.stringify(profile, null, 2),
)
