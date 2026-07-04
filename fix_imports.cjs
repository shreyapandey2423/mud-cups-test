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

  let importsToAdd = [];
  
  if (content.includes('"/images/hero.jpg"')) {
    importsToAdd.push("import heroImg from '../assets/images/hero.jpg';");
    content = content.replace('"/images/hero.jpg"', '{heroImg}');
  }
  
  if (content.includes('"/images/featured-food.jpg"')) {
    importsToAdd.push("import featuredFoodImg from '../assets/images/featured-food.jpg';");
    content = content.replace('"/images/featured-food.jpg"', '{featuredFoodImg}');
  }
  
  if (content.includes('"/images/review/qr-code.png"')) {
    importsToAdd.push("import qrCodeImg from '../assets/images/review/qr-code.png';");
    content = content.replace('"/images/review/qr-code.png"', '{qrCodeImg}');
  }
  
  if (content.includes('"/images/swiggy-logo.svg"')) {
    importsToAdd.push("import swiggyLogo from '../assets/images/swiggy-logo.svg';");
    content = content.replace('"/images/swiggy-logo.svg"', '{swiggyLogo}');
  }
  
  if (content.includes('"/images/zomato-logo.svg"')) {
    importsToAdd.push("import zomatoLogo from '../assets/images/zomato-logo.svg';");
    content = content.replace('"/images/zomato-logo.svg"', '{zomatoLogo}');
  }
  
  if (content.includes('"/images/menu-intro.jpg"')) {
    importsToAdd.push("import menuIntroImg from '../assets/images/menu-intro.jpg';");
    content = content.replace('"/images/menu-intro.jpg"', '{menuIntroImg}');
  }
  
  // MudCupsLogo has "/images/logo/logo.png"
  if (content.includes('"/images/logo/logo.png"')) {
    let importPath = "'../assets/images/logo/logo.png'";
    // if we are in components/MudCupsLogo.tsx it is '../'
    importsToAdd.push("import logoImg from '../assets/images/logo/logo.png';");
    content = content.replace(/"\/images\/logo\/logo\.png"/g, '{logoImg}');
  }

  // GalleryPage has many "/images/gallery/gallery-01.webp.png"
  for (let i = 1; i <= 9; i++) {
    const num = i.toString().padStart(2, '0');
    if (content.includes(`"/images/gallery/gallery-${num}.webp.png"`)) {
      importsToAdd.push(`import gallery0${num} from '../assets/images/gallery/gallery-${num}.webp.png';`);
      content = content.replace(`"/images/gallery/gallery-${num}.webp.png"`, `gallery0${num}`);
    }
  }

  if (importsToAdd.length > 0) {
    // Add imports after standard react imports
    const lines = content.split('\n');
    let lastImportIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        lastImportIdx = i;
      }
    }
    
    if (lastImportIdx !== -1) {
      lines.splice(lastImportIdx + 1, 0, ...importsToAdd);
    } else {
      lines.unshift(...importsToAdd);
    }
    content = lines.join('\n');
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
