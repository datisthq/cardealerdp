import { intro, isCancel, spinner, text } from "@clack/prompts"
import { execa } from "execa"
import pc from "picocolors"

const $ = execa({
  cwd: import.meta.dirname,
  stdout: ["inherit", "pipe"],
  verbose: "short",
  preferLocal: true,
})

intro(pc.bold("Welcome to the Data Package extension template!"))

const name = await text({
  message: "Provide a name for your extension",
  placeholder: "extensiondp",
  validate(value) {
    if (value.length === 0) return "Name is required!"
    return undefined
  },
})

if (isCancel(name)) {
  process.exit(0)
}

const loader = spinner()
loader.start(`Setting "${name}" as the extension name...`)

await $`
replace-in-files
sdk-py/package.json
sdk-ts/package.json
--regex='"name": ".*"'
--replacement='"name": "${name}"'
`

await $`
replace-in-files
README.md
extension/README.md
sdk-py/README.md
sdk-ts/README.md
--regex='# .*'
--replacement='# ${name}'
`

loader.stop("Name set!")
