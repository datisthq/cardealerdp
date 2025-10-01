import { execa } from "execa"
import metadata from "./package.json" with { type: "json" }

const $ = execa({
  cwd: import.meta.dirname,
  stdout: ["inherit", "pipe"],
  verbose: "short",
  preferLocal: true,
})

// Extension

await $`
replace-in-files
extension/profile.json
--regex='v(\\d+\\.\\d+\\.\\d+)/schemas'
--replacement=v${metadata.version}/schemas
`

// TypeScript

await $({ shell: true })`
jq
'.allOf |= .[1:]'
extension/profile.json
| json2ts --additionalProperties false
> sdk-ts/profile.ts
`
