import { intro, isCancel, outro, spinner, text } from "@clack/prompts"
import pc from "picocolors"
import { remark } from "remark"
import { replaceInFile } from "replace-in-file"
import TOML from "smol-toml"
import { readdir, rename } from "node:fs/promises"
import { join } from "node:path"

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

  // Rename the Python package directory
  const sdkPyPath = "sdk-py"
  const dirs = await readdir(sdkPyPath, { withFileTypes: true })
  const packageDir = dirs.find(dir => dir.isDirectory())

  if (packageDir) {
    const oldPath = join(sdkPyPath, packageDir.name)
    const newPath = join(sdkPyPath, name)
    await rename(oldPath, newPath)
  }

  loader.stop("Name set!")
}

const description = await text({
  message: "Provide a description for your extension",
  placeholder: "A data package extension for...",
  validate(value) {
    if (value.length === 0) return "Description is required!"
    return undefined
  },
})

if (!isCancel(description)) {
  loader.start("Setting the extension description...")

  await replaceInFile({
    files: ["sdk-ts/package.json"],
    processor: source => {
      const data = JSON.parse(source) as any
      data.description = description
      const target = JSON.stringify(data, null, 2)
      return target
    },
  })

  await replaceInFile({
    files: ["sdk-py/pyproject.toml"],
    processor: source => {
      const data = TOML.parse(source) as any
      data.project.description = description
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
        if (node.type === "paragraph") {
          const textNode = node.children[0]
          if (textNode?.type === "text") {
            const value = textNode.value.trim()
            if (!value.startsWith("[") && !value.startsWith("<")) {
              node.children = [{ type: "text", value: description }]
              break
            }
          }
        }
      }

      return remark().stringify(tree)
    },
  })

  loader.stop("Description set!")
}

outro("All done! Now you can review and commit the changes")
