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
  if (content.includes('{logoImg}')) {
    content = content.replace(/import logoImg from '[^']+';/, "import logoImg from '../assets/images/logo/logo.png';");
  }
  
  // Hero
  if (content.includes('{heroImg}')) {
    content = content.replace(/import heroImg from '[^']+';/, "import heroImg from '../assets/images/hero/hero.jpg';");
  }

  // FeaturedFood
  if (content.includes('{featuredFoodImg}')) {
    content = content.replace(/import featuredFoodImg from '[^']+';/, "import featuredFoodImg from '../assets/images/featured/featured-food.jpg';");
  }

  // MenuSection
  if (content.includes('{menuIntroImg}')) {
    content = content.replace(/import menuIntroImg from '[^']+';/, "import menuIntroImg from '../assets/images/menu/menu-intro.jpg';");
  }

  // Testimonials
  if (content.includes('{qrCodeImg}')) {
    content = content.replace(/import qrCodeImg from '[^']+';/, "import qrCodeImg from '../assets/images/review/qr-code.png';");
  }

  // Offers
  if (content.includes('{swiggyLogo}')) {
    content = content.replace(/import swiggyLogo from '[^']+';/, "import swiggyLogo from '../assets/images/icons/swiggy-logo.svg';");
  }
  if (content.includes('{zomatoLogo}')) {
    content = content.replace(/import zomatoLogo from '[^']+';/, "import zomatoLogo from '../assets/images/icons/zomato-logo.svg';");
  }

  // GalleryPage
  for (let i = 1; i <= 9; i++) {
    const num = i.toString().padStart(2, '0');
    if (content.includes(`gallery0${num}`)) {
      content = content.replace(
        new RegExp(`import gallery0${num} from '[^']+';`),
        `import gallery0${num} from '../assets/images/gallery/gallery-${num}.webp.png';`
      );
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
