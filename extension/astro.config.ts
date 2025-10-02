import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"
import starlightScrollToTop from "starlight-scroll-to-top"
import metadata from "./package.json" with { type: "json" }

export default defineConfig({
  site: "https://dpkit.dev",
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
        alt: "DPkit Logo",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/datisthq/cardealerdp",
        },
      ],
      favicon: "favicon.svg",
      editLink: {
        baseUrl: "https://github.com/datisthq/cardealerdp/edit/main/",
      },
      lastUpdated: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5 },
      plugins: [starlightScrollToTop()],
      sidebar: [
        //{ label: "Overview", autogenerate: { directory: "overview" } },
        //{ label: "Guides", autogenerate: { directory: "guides" } }
      ],
    }),
  ],
})
