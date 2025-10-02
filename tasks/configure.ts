import { intro, isCancel, spinner, text } from "@clack/prompts"
import pc from "picocolors"
import { remark } from "remark"
import { replaceInFile } from "replace-in-file"
import TOML from "smol-toml"

const loader = spinner()
intro(pc.bold("Welcome to the Data Package extension template!"))

const name = await text({
  message: "Provide a name for your extension",
  placeholder: "extensiondp",
  validate(value) {
    if (value.length === 0) return "Name is required!"
    return undefined
  },
})

if (!isCancel(name)) {
  loader.start("Setting the extension name...")

  await replaceInFile({
    files: ["sdk-ts/package.json"],
    processor: source => {
      const data = JSON.parse(source) as any
      data.name = name
      const target = JSON.stringify(data, null, 2)
      return target
    },
  })

  await replaceInFile({
    files: ["sdk-py/pyproject.toml"],
    processor: source => {
      const data = TOML.parse(source) as any
      data.project.name = name
      const target = TOML.stringify(data)
      return target
    },
  })

  await replaceInFile({
    files: [
      "extension/README.md",
      "sdk-py/README.md",
      "sdk-ts/README.md",
      "README.md",
    ],
    processor: source => {
      const tree = remark().parse(source)

      for (const node of tree.children) {
        if (node.type === "heading" && node.depth === 1) {
          node.children = [{ type: "text", value: name }]
          break
        }
      }

      return remark().stringify(tree)
    },
  })

  loader.stop("Name set!")
}
