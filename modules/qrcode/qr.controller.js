const QRCode = require("qrcode");

const generateQR = async (qr) => {
  const data = await QRCode.toDataURL(qr);
  return data;
};

module.exports = { generateQR };
