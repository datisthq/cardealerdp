import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"
import starlightChangelogs, {
  makeChangelogsSidebarLinks,
} from "starlight-changelogs"
import starlightScrollToTop from "starlight-scroll-to-top"
import metadata from "./package.json" with { type: "json" }

const [owner, repo] = new URL(metadata.repository).pathname.split("/").slice(1)

export default defineConfig({
  site: `https://${owner}.github.io/${repo}`,
  srcDir: ".",
  outDir: "build",
  integrations: [
    starlight({
      title: metadata.name,
      description: metadata.description,
      customCss: ["/assets/styles.css"],
      components: {
        SocialIcons: "./components/SocialIcons.astro",
      },
      logo: {
        light: "/assets/logo-light.svg",
        dark: "/assets/logo-dark.svg",
        replacesTitle: true,
        alt: "Logo",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: metadata.repository,
        },
      ],
      favicon: "favicon.svg",
      editLink: {
        baseUrl: `${metadata.repository}/edit/main`,
      },
      lastUpdated: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5 },
      plugins: [starlightScrollToTop(), starlightChangelogs()],
      sidebar: [
        { label: "Overview", autogenerate: { directory: "overview" } },
        { label: "Extension", autogenerate: { directory: "extension" } },
        {
          label: "Changelog",
          collapsed: true,
          items: makeChangelogsSidebarLinks([
            {
              type: "recent",
              base: "changelog",
              count: 10,
            },
          ]),
        },
      ],
    }),
  ],
})
