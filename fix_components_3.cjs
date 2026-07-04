const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // MudCupsLogo
  if (content.includes('logo/logo.png')) {
    content = content.replace(/logo\/logo\.png/g, "logo/mud-cups-logo.png.png");
  }
  
  // FeaturedFood
  if (content.includes('featured-food.jpg')) {
    content = content.replace(/featured-food\.jpg/g, "featured-food.jpg.png");
  }

  // LocationFooter
  if (content.includes('location.jpg')) {
    content = content.replace(/location\.jpg/g, "location.jpg.png");
  }

  // MenuSection
  if (content.includes('menu-intro.jpg')) {
    content = content.replace(/menu-intro\.jpg/g, "menu-intro.jpg.png");
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
