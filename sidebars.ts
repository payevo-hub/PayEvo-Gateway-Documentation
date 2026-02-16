import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import path from 'path';

const getApiSidebar = () => {
  const isEn = process.env.DOCUSAURUS_CURRENT_LOCALE === 'en';
  
  // Caminho dinâmico
  const sidebarPath = isEn 
    ? path.resolve(__dirname, 'i18n/en/docusaurus-plugin-content-docs/current/sidebar.ts')
    : path.resolve(__dirname, 'docs/sidebar.ts');

  try {
    delete require.cache[require.resolve(sidebarPath)];
    const rawSidebar = require(sidebarPath);
    const sidebarItems = rawSidebar.default || rawSidebar;

    // Normaliza os IDs: Garante que o Docusaurus encontre os docs 
    // independente de ter "current/" ou não no arquivo gerado.
    return sidebarItems.map((category) => {
      if (category.type === 'category' && category.items) {
        return {
          ...category,
          items: category.items.map((item) => ({
            ...item,
            // Remove o prefixo apenas na lógica de exibição, se presente
            id: item.id.replace(/^current\//, ''), 
          })),
        };
      }
      return category;
    });
  } catch (e) {
    return [];
  }
};

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'PayEvo',
      collapsed: false,
      items: [
        { type: 'doc', id: 'payevo/introducao' },
        { type: 'doc', id: 'payevo/formato-dos-postbacks' }
      ]
    },
    // Injeta a sidebar da API já normalizada
    ...getApiSidebar().filter(item => (item.id !== 'payevo-gateway-api') && (item.id !== 'current/payevo-gateway-api'))
  ],
};

export default sidebars;