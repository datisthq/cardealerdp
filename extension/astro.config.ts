import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"
import starlightChangelogs, {
  makeChangelogsSidebarLinks,
} from "starlight-changelogs"
import starlightScrollToTop from "starlight-scroll-to-top"
import metadata from "./package.json" with { type: "json" }

const { origin, hostname, pathname } = new URL(metadata.homepage)

console.log(origin, pathname)

export default defineConfig({
  site: origin,
  base: pathname,
  srcDir: ".",
  outDir: "build",
  integrations: [
    starlight({
      title: metadata.title,
      description: metadata.description,
      customCss: ["/assets/styles.css"],
      components: {
        SocialIcons: "./components/SocialIcons.astro",
      },
      logo: {
        light: "/assets/logo-light.svg",
        dark: "/assets/logo-dark.svg",
        replacesTitle: false,
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
        {
          label: "Specification",
          items: [
            { label: "Metadata", slug: "specification/metadata" },
            {
              label: "Data",
              autogenerate: { directory: "specification/data" },
            },
          ],
        },
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
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://plausible.io/js/script.js",
            "data-domain": hostname,
            defer: true,
          },
        },
      ],
    }),
  ],
})
