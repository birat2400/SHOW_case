const router = require("express").Router();
const qrcodeuse = require("../modules/qrcode/qr.api");
const mailuse = require("../modules/mail/mail");

router.use("/qr", qrcodeuse);
router.use("/mail", mailuse);

module.exports = router;
