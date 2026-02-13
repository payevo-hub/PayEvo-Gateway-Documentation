import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'PayEvo',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'payevo/introducao',
        },
        {
          type: 'doc',
          id: 'payevo/formato-dos-postbacks',
        }
      ]
    },
    ...require("./docs/sidebar.js")
      .filter((item) => item.id !== 'payevo-gateway-api')
      .map((category) => {
        if (category.type === 'category' && category.items) {
          return {
            ...category,
            items: category.items.filter((endpoint) => {
              return endpoint.id !== 'criar-antecipacao';
            }),
          };
        }
        return category;
      }),
  ],
};

export default sidebars;
