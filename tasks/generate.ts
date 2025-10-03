import { readdir } from "node:fs/promises"
import { readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { basename, extname } from "node:path"
import { intro, spinner } from "@clack/prompts"
import { execa } from "execa"
import { JSONSchemaMarkdownDoc } from "json-schema-doc-ts"
import pc from "picocolors"
import { remark } from "remark"
import { replaceInFile } from "replace-in-file"
import metadata from "../package.json" with { type: "json" }

const loader = spinner()
const root = join(import.meta.dirname, "..")
const [owner, repo] = new URL(metadata.repository).pathname.split("/").slice(1)

const $ = execa({
  cwd: root,
  stdout: ["inherit", "pipe"],
  //verbose: "short",
  preferLocal: true,
})

intro(pc.bold("Generating the extension"))

// Extension

loader.start("Updating extension")

await replaceInFile({
  files: "extension/profile.json",
  from: /githubusercontent.*schemas/g,
  to: `githubusercontent.com/${owner}/${repo}/v${metadata.version}/schemas`,
})

await $`
uvx
jsonschema2md@1.7.0
extension/profile.json extension/content/docs/extension/metadata.md
`

await replaceInFile({
  files: ["extension/content/docs/extension/metadata.md"],
  from: /^#.*/,
  to: "---\ntitle: Metadata\n---",
})

loader.stop("Extension updated!")

// TypeScript

loader.start("Updating TypeScript")

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

await writeFile(`${root}/sdk-ts/schemas/index.ts`, typescriptIndex.join("\n"))

loader.stop("TypeScript updated!")

// Python

loader.start("Updating Python")

await $({ shell: true })`
jq
'.allOf |= .[1:]'
extension/profile.json
| uvx
--from datamodel-code-generator@0.34.0
datamodel-codegen
--input-file-type jsonschema
--output sdk-py/${metadata.slug}/profile.py
--output-model-type pydantic_v2.BaseModel
--disable-timestamp
`

const pythonIndex: string[] = []
for (const file of await readdir("extension/schemas")) {
  const name = basename(file, extname(file))
  pythonIndex.push(`from .${name} import *`)

  await $({ shell: true })`
  dp schema convert
  extension/schemas/${file}
  --to-format jsonschema
  | uvx
  --from datamodel-code-generator@0.34.0
  datamodel-codegen
  --input-file-type jsonschema
  --output sdk-py/${metadata.slug}/schemas/${name}.py
  --output-model-type pydantic_v2.BaseModel
  --disable-timestamp
  `
}

await writeFile(
  `${root}/sdk-py/${metadata.slug}/schemas/__init__.py`,
  pythonIndex.join("\n"),
)

loader.stop("Python updated!")
