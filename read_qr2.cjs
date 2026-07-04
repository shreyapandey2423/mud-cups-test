const { Jimp } = require('jimp');
const jsQR = require('jsqr');

async function main() {
  const image = await Jimp.read('src/assets/images/review/google-review-qr.jpg');
  
  // Try grayscale and increase contrast
  image.greyscale().contrast(0.5);
  
  const code = jsQR(image.bitmap.data, image.bitmap.width, image.bitmap.height);
  if (code) {
    console.log("Found QR code:", code.data);
  } else {
    console.log("No QR code found after contrast adjustment.");
  }
}
main().catch(console.error);
