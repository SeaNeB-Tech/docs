import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seaneb Docs — Documentation, APIs & Developer Resources',
  tagline: 'Official Seaneb documentation for products, APIs, developer guides, system architecture, integrations and technical resources.',
  favicon: 'img/favicon.ico',
  url: 'https://docs.seaneb.com',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'Seaneb-Tech',
  projectName: 'seaneb-docs',
  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'gu'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    // Override default metadata
    metadata: [
      { name: 'keywords', content: 'Seaneb, Seaneb Docs, Seaneb Documentation, Seaneb API, Seaneb Developer, Seaneb Products, Seaneb Jobs, Seaneb App, Seaneb Auto, Seaneb Trip, Seaneb News, Seaneb Property, Seaneb NGO, Tiffin Service, Arthyam' },
    ],

    navbar: {
      title: 'Seaneb Docs',
      logo: {
        alt: 'Seaneb Logo',
        src: 'img/logo.svg', // will use text fallback if not present natively in custom layout if needed
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'custom-searchTrigger',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://www.seaneb.org/',
          label: 'Seaneb Website',
          position: 'right',
        },

        {
          type: 'custom-productLauncher',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Seaneb Technologies Pvt Ltd. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
