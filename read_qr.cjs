const jsQR = require('jsqr');
const { Jimp } = require('jimp');

async function main() {
  const image = await Jimp.read('src/assets/images/review/google-review-qr.jpg');
  const code = jsQR(image.bitmap.data, image.bitmap.width, image.bitmap.height);
  if (code) {
    console.log("Found QR code:", code.data);
  } else {
    console.log("No QR code found.");
  }
}
main().catch(console.error);
