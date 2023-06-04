const express = require("express");
const app = express();
const port = 3000;
const vision = require("./azureVision");
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "*, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/vision", async (req, res) => {
  let imageUrl = req.query.imageUrl;
  vision.azureVision(imageUrl, (result) => {
    res.json({
      result: result,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
