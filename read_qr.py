import cv2
from pyzbar.pyzbar import decode

img = cv2.imread('src/assets/images/review/google-review-qr.jpg')
decoded_objects = decode(img)

for obj in decoded_objects:
    print('Type:', obj.type)
    print('Data:', obj.data.decode('utf-8'))

if not decoded_objects:
    # Try OpenCV QRCodeDetector
    detector = cv2.QRCodeDetector()
    data, bbox, straight_qrcode = detector.detectAndDecode(img)
    if data:
        print('Data (cv2):', data)
    else:
        # Try WeChatQRCode
        try:
            wechat_detector = cv2.wechat_qrcode_WeChatQRCode()
            res, points = wechat_detector.detectAndDecode(img)
            if res:
                print('Data (WeChat):', res[0])
            else:
                print('No QR code found by WeChat')
        except Exception as e:
            print("WeChat QRCode not available:", e)
