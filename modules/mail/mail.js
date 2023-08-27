const routes = require("express").Router();
const mailer = require("../../server/index");

routes.post("/", async (req, res, next) => {
  try {
    const { from, to, subject, text, html } = req.body;
    const result = await mailer.main({ from, to, subject, text, html });
    res.send({result});
  } catch (e) {
    next(e);
  }
});

module.exports = routes;
