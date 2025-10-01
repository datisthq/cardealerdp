import { readdir } from "node:fs/promises"
import { writeFile } from "node:fs/promises"
import { basename, extname } from "node:path"
import { execa } from "execa"
import metadata from "./sdk-ts/package.json" with { type: "json" }

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

const typescriptIndex: string[] = []
for (const file of await readdir("extension/schemas")) {
  const name = basename(file, extname(file))
  typescriptIndex.push(`export * from "./${name}.ts"`)

  await $({ shell: true })`
  dp schema convert
  extension/schemas/${file}
  --to-format jsonschema
  | json2ts --additionalProperties false
  > sdk-ts/schemas/${name}.ts
  `
}

await writeFile(
  `${import.meta.dirname}/sdk-ts/schemas/index.ts`,
  typescriptIndex.join("\n"),
)

// Python

await $({ shell: true })`
jq
'.allOf |= .[1:]'
extension/profile.json
| uvx --from datamodel-code-generator datamodel-codegen
--input-file-type jsonschema
--output sdk-py/${metadata.name}/profile.py
--output-model-type pydantic_v2.BaseModel
`

const pythonIndex: string[] = []
for (const file of await readdir("extension/schemas")) {
  const name = basename(file, extname(file))
  pythonIndex.push(`from .${name} import *`)

  await $({ shell: true })`
  dp schema convert
  extension/schemas/${file}
  --to-format jsonschema
  | uvx --from datamodel-code-generator datamodel-codegen
  --input-file-type jsonschema
  --output sdk-py/${metadata.name}/schemas/${name}.py
  --output-model-type pydantic_v2.BaseModel
  `
}

await writeFile(
  `${import.meta.dirname}/sdk-py/${metadata.name}/schemas/__init__.py`,
  pythonIndex.join("\n"),
)
