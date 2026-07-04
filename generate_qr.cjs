const QRCode = require('qrcode');

const url = 'https://g.page/r/CbV02_sD3cT3EBM/review';
const opts = {
  errorCorrectionLevel: 'H',
  type: 'image/png',
  quality: 1.0,
  margin: 4,
  scale: 16,
  color: {
    dark:"#000000",
    light:"#FFFFFF"
  }
};

QRCode.toFile('src/assets/images/review/google-review-qr.png', url, opts, function (err) {
  if (err) throw err;
  console.log('done');
});
