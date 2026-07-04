const { GoogleGenAI } = require("@google/genai");
const fs = require('fs');

const ai = new GoogleGenAI({});

async function main() {
  try {
    const imagePath = "src/assets/images/review/google-review-qr.jpg";
    const imagePart = {
      inlineData: {
        data: Buffer.from(fs.readFileSync(imagePath)).toString("base64"),
        mimeType: "image/png"
      }
    };
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: 'user',
          parts: [
            imagePart,
            { text: "This image contains a QR code. Please scan/read the QR code and provide EXACTLY the URL or text that it encodes. Do not provide any other text." }
          ]
        }
      ]
    });
    console.log("Gemini response:", response.text);
  } catch(e) {
    console.error(e);
  }
}
main();
