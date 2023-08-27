const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use("/", routes);

app.use((err, req, res, next) => {
  err =
    process.env.NODE_ENV === "production"
      ? "something went wrong..."
      : err.toString();
  res.status(500).send(err);
});
app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.static('public'));

app.listen(4000);
console.log("running");
