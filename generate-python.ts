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

// Python

await $({ shell: true })`
jq
'.allOf |= .[1:]'
extension/profile.json
| uvx --from datamodel-code-generator datamodel-codegen
--output sdk-py/${metadata.name}/profile.py
--output-model-type pydantic_v2.BaseModel
`

const schemasIndexLines: string[] = []
for (const source of await readdir("extension/schemas")) {
  const target = `${basename(source, extname(source))}.py`
  schemasIndexLines.push(`from .${basename(source, extname(source))}`)

  await $({ shell: true })`
  dp schema convert
  extension/schemas/${source}
  --to-format jsonschema
  | uvx --from datamodel-code-generator datamodel-codegen
  --output sdk-py/${metadata.name}/schemas/${target}
  --output-model-type pydantic_v2.BaseModel
  `
}

const schemasIndexContent = schemasIndexLines.join("\n")
await writeFile("sdk-py/schemas/__init__.py", schemasIndexContent)
