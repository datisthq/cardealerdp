import { join } from "node:path"
import { intro, isCancel, spinner, text } from "@clack/prompts"
import pc from "picocolors"
import { replaceInFile } from "replace-in-file"

const loader = spinner()
const root = join(import.meta.dirname, "..")

console.log(root)

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

loader.start(`Setting "${name}" as the extension name...`)

await replaceInFile({
  files: ["sdk-ts/package.json"],
  from: /"name": ".*"/g,
  to: `"name": "${name}"`,
})

await replaceInFile({
  files: [
    "extension/README.md",
    "sdk-py/README.md",
    "sdk-ts/README.md",
    "README.md",
  ],
  from: /^# .*/g,
  to: `# ${name}`,
})

loader.stop("Name set!")
