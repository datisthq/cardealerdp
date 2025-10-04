import type * as standard from "@dpkit/core"
import type * as extension from "./profile.ts"

export type Resource = standard.Resource & extension.Resource
export type Package = standard.Package & extension.Package

export type * from "./schemas/index.ts"
