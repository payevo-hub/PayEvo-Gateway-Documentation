const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../docs');

// Lista de arquivos exatos que serão deletados
const filesToDelete = [
  'payevo-gateway-api.info.mdx', // Info page
];

filesToDelete.forEach((file) => {
  const filePath = path.join(docsDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Successfully deleted: ${file}`);
  }
});