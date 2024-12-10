// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AppFlow documentation",
  tagline: "Build your business apps and automate your tasks without coding.",
  favicon: "img/favicon.ico",

  url: "https://widedboukouba.github.io",
  baseUrl: "/AppFlowDocumentation/",

  organizationName: "widedboukouba", // Usually your GitHub org/user name.
  projectName: "AppFlowDocumentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  //  opm: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // id: 'docs', // omitted => default instance
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [require("remark-mermaid")],
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // notes: {
        //   // id: 'docs', // omitted => default instance
        //   path: "notes",
        //   routeBasePath: "notes",
        //   sidebarPath: require.resolve("./sidebarsNotes.js"),

        //   // Please change this to your repo.
        //   // editUrl:
        //   //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },

        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
    // Main Documentation (Default)
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "mainDocs", // Unique ID for this instance
    //     path: "./docs",
    //     routeBasePath: "/docs",
    //     sidebarPath: require.resolve("./sidebars.js"),
    //     editUrl:
    //       "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
    //   },
    // ],

    // User Guide Documentation
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "userguide",
        path: "./userguide",
        routeBasePath: "/userguide",
        sidebarPath: "./sidebarsUserGuide.js",
        // editUrl:
        //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      },
    ],

    // Notes Documentation
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "notes",
        path: "./notes",
        routeBasePath: "/notes",
        sidebarPath: "./sidebarsNotes.js",
        // editUrl:
        //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "fronts",
        path: "./fronts",
        routeBasePath: "/fronts",
        sidebarPath: "./sidebarsFronts.js",
        // editUrl:
        //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "backends",
        path: "./backends",
        routeBasePath: "/backends",
        sidebarPath: "./sidebarsBackends.js",
        // editUrl:
        //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      },
    ],
  ],

  themeConfig: {
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
    },

    image: "img/docusaurus-social-card.jpg",
    // algolia: {
    //   appId: "3UBUL6C1TL",
    //   apiKey: "c80ef08afbfdb5f44dd3812dd7f72242",
    //   indexName: "app-flow"
    // },
    navbar: {
      title: "AppFlow",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "intro/index",
          label: "🚀 Getting Started",
        },
        // {
        //   type: "doc",
        //   position: "left",
        //   docId: "Content-Api/intro", // Referencing the 'intro.md' in the 'content-api' folder
        //   label: "Content API",
        // },
        // // Link for the 'setapp-deployment' folder
        // {
        //   type: "doc",
        //   position: "left",
        //   docId: "Setapp-deployment/intro", // Referencing the 'installation.md' in the 'setapp-deployment' folder
        //   label: "Setapp Deployment",
        // },

        // {
        //   to: "/userguide/intro", // To highlight the navbar item, you must link to a document, not a top-level directory
        //   position: "left",
        //   label: "Front-end Docs",
        //   activeBaseRegex: `/userguide/`,
        // },
        // {
        //   to: "/userguide/intro", // To highlight the navbar item, you must link to a document, not a top-level directory
        //   position: "left",
        //   label: "Back-end Docs",
        //   activeBaseRegex: `/userguide/`,
        // },
        {
          to: "/fronts/intro", // To highlight the navbar item, you must link to a document, not a top-level directory
          position: "left",
          label: "Front-end docs",
          activeBaseRegex: `/front/`,
        },
        {
          to: "/backends/intro", // To highlight the navbar item, you must link to a document, not a top-level directory
          position: "left",
          label: "Back-end docs",
          activeBaseRegex: `/backend/`,
        },
        {
          to: "/notes/intro", // To highlight the navbar item, you must link to a document, not a top-level directory
          position: "left",
          label: "Release Note",
          activeBaseRegex: `/note/`,
        },

        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      logo: {
        alt: "Arsela Logo",
        src: "/img/arrsela.png", // Ensure the image is placed in the "static/img" folder
        href: "https://www.arsela.co/", // Optional: link to your homepage or another URL
      },
      links: [
        {
          title: "AppFlow Documentation",
          items: [
            {
              label: "Quick Start",
              to: "/docs/intro",
            },
            // {
            //   label: "Front-end Docs",
            //   to: "/userguide/intro",
            // },
            // {
            //   label: "Back-end Docs",
            //   to: "/userguide/intro",
            // },
            {
              label: "Release Note",
              href: "/notes/intro",
            },
            {
              label: "Front-end Docs",
              href: "/fronts/intro",
            },
            {
              label: "Back-end Docs",
              href: "/backends/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. All rights reserved by ARSELA TECHNOLOGIES.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    deployment: {
      type: "git",
      branch: "gh-pages",
      repository: "https://github.com/widedboukouba/AppFlowDocumentation",
    },
  },
  // deployment configuration
};

export default config;
