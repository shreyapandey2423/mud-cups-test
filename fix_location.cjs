const fs = require('fs');
let content = fs.readFileSync('src/components/LocationFooter.tsx', 'utf8');

if (!content.includes('location.jpg')) {
  // We'll add the import
  content = "import locationImg from '../assets/images/location/location.jpg';\n" + content;
  
  // We'll replace the iframe with the image
  content = content.replace(
    /<iframe[^>]+>/g,
    `<img src={locationImg} alt="Mud Cups Cafe Location" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1]" />`
  );
  
  fs.writeFileSync('src/components/LocationFooter.tsx', content, 'utf8');
  console.log("Updated LocationFooter.tsx");
}
