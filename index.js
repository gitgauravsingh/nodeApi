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
const bannerdata = fs.readFileSync(`${__dirname}/Api/banner.json`, "utf-8");
const banner = JSON.parse(bannerdata);

app.get("/banner", (req, res) => {
  res.json(banner);
});
const featersdata = fs.readFileSync(`${__dirname}/Api/featers.json`, "utf-8");
const featers = JSON.parse(featersdata);

app.get("/featers", (req, res) => {
  res.json(featers);
});

app.listen(port, function () {
  console.log("server running");
});
