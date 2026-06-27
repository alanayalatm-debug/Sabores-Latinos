const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ACER\\.gemini\\antigravity-ide\\brain\\7f355f29-3c6c-4bd4-845e-615f1e66db83';
const destDir = path.join(__dirname, 'frontend', 'public', 'images');

const mappings = {
  'blog_cacao_1782598625369.png': 'blog_cacao.png',
  'blog_arepa_1782598637640.png': 'blog_arepa.png',
  'blog_aji_1782598650754.png': 'blog_aji.png',
  'blog_maiz_1782598663471.png': 'blog_maiz.png'
};

console.log('Iniciando copiado de imágenes del blog...');
console.log(`Destino: ${destDir}`);

// Asegurar que la carpeta destino existe
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let count = 0;
for (const [srcName, destName] of Object.entries(mappings)) {
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, destName);
  
  if (fs.existsSync(srcPath)) {
    try {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copiado con éxito: ${destName}`);
      count++;
    } catch (err) {
      console.error(`✗ Error al copiar ${destName}:`, err.message);
    }
  } else {
    console.error(`✗ Archivo origen no encontrado: ${srcName}`);
  }
}

console.log(`Proceso terminado. ${count} de 4 imágenes copiadas.`);
