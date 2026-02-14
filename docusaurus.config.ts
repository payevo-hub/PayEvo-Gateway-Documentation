import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

require('dotenv').config();

const config: Config = {
  title: 'DOC - Payevo',
  tagline: 'Documentação da API PayEvo',
  favicon: 'img/logo-icon.ico',

  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://docs.payevo.com.br',

  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/PayEvo-Gateway-Documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'payevo-hub', // Usually your GitHub org/user name.
  projectName: 'PayEvo-Gateway-Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Internationalization
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve the docs at the site's root
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", 
        docsPluginId: "classic",
        config: {
          payevo: {
            specPath: "openapi.yaml", // Caminho para o arquivo YAML
            outputDir: "docs", // Onde as páginas geradas ficarão
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: undefined,
              sidebarCollapsed: false,
            },
          }
        }
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'], // Habilita a interface visual de API

  customFields: {
    // Isso injeta a variável do seu .env para dentro do Docusaurus
    cashoutPassword: process.env.CASHOUT_PASSWORD,
  },

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Logo Payevo',
        src: 'img/logo_payevo.svg',
        srcDark: 'img/logo_payevo_dark.webp',
        href: '/',
        target: '_self',
      },
      items: [
        {
          href: 'https://hub.payevo.com.br/',
          label: 'Gateway',
          position: 'right',
        },

        // Desabilitado temporariamente
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    prism: {
      theme: prismThemes.jettwaveLight,
      darkTheme: prismThemes.vsDark
    },
    // Algolia search configuration
    // Habilitar quando tiver as credenciais corretas
    // algolia: {
    //   appId: 'SEU_APP_ID',
    //   apiKey: 'SUA_SEARCH_API_KEY',
    //   indexName: 'SEU_INDEX_NAME',
    //   contextualSearch: true,
    //   searchPagePath: 'search'
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
