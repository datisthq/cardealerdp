import { readdir } from "node:fs/promises"
import { writeFile } from "node:fs/promises"
import { basename, extname } from "node:path"
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

const indexLines: string[] = []
for (const source of await readdir("extension/schemas")) {
  const target = `${basename(source, extname(source))}.ts`
  indexLines.push(`export * from "./${target}"`)

  await $({ shell: true })`
  dp schema convert
  extension/schemas/${source}
  --to-format jsonschema
  | json2ts --additionalProperties false
  > sdk-ts/schemas/${target}
  `
}

const indexContents = indexLines.join("\n")
await writeFile("sdk-ts/schemas/index.ts", indexContents)
