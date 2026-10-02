
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seaneb Documentation',
  tagline: 'Building technology for everyday life.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Replace with your actual documentation domain
  url: 'https://docs.seaneb.com',
  baseUrl: '/',

  // GitHub repository
  organizationName: 'SeaNeB-Tech',
  projectName: 'seaneb-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          // Add your GitHub repository URL when ready
          // editUrl: 'https://github.com/SeaNeB-Tech/seaneb-docs/tree/main/',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/seaneb-social-card.png',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'Seaneb Docs',
     

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://seaneb.com',
          label: 'Seaneb Website',
          position: 'right',
        },
        {
          href: 'https://github.com/SeaNeB-Tech',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Seaneb Products',
          items: [
            {
              label: 'Seaneb Jobs',
              href: 'https://jobs.seaneb.com',
            },
            {
              label: 'Seaneb Website',
              href: 'https://seaneb.com',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SeaNeB-Tech',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Seaneb Technologies Pvt. Ltd. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
