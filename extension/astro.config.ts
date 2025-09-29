import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"
import starlightScrollToTop from "starlight-scroll-to-top"

export default defineConfig({
  site: "https://dpkit.dev",
  srcDir: ".",
  outDir: "build",
  integrations: [
    starlight({
      title: "Car Dealer Data Package",
      description:
        "dpkit is a fast TypeScript data management framework built on top of the Data Package standard and Polars DataFrames. It supports various formats like CSV, JSON, and Parquet and integrates with data platforms such as CKAN, Zenodo, and GitHub",
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
          href: "https://github.com/datisthq/dpkit",
        },
      ],
      favicon: "favicon.svg",
      editLink: {
        baseUrl: "https://github.com/datisthq/dpkit/edit/main/",
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
