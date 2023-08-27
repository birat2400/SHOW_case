const routes = require("express").Router();
const qrCode = require("./qr.controller");

routes.post("/", async (req, res, next) => {
  try {
    const { url: qrh } = req.body;
    const qrdata = await qrCode.generateQR(qrh);
    const img = `<img src= ${qrdata}/>`;
    res.send(img);
  } catch (e) {
    qrdata;
    next(e);
  }
});

module.exports = routes;
