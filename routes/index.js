const routes = require ("express").Router();
const apiroutes = require("./routes.api");
const uiroutes = require("./routes.ui")

routes.use("/api/v1",apiroutes);
routes.use("/ui",uiroutes);

module.exports = routes;
