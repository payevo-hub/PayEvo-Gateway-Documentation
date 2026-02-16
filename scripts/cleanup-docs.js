const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../docs');

const dirs = [
  path.join(__dirname, '../docs'),
  path.join(__dirname, '../i18n/en/docusaurus-plugin-content-docs/current')
];

// Lista de arquivos exatos que serão deletados
const filesToDelete = [
  'payevo-gateway-api.info.mdx', // Info page
];

dirs.forEach(dir => {
  filesToDelete.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Deletado de ${dir}: ${file}`);
    }
  });
});