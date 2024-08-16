const express = require("express");
const cors = require("cors");
const fs = require("fs");

const port = 5000;
const app = express();

const headerData = fs.readFileSync(`${__dirname}/Api/header.json`, "utf-8");
const data = JSON.parse(headerData);

app.get("/header", (req, res) => {
  res.json(data);
});
app.listen(port, function () {
  console.log("server running");
});
