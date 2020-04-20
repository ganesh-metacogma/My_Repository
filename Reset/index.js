const express = require("express");
const messagebird = require("messagebird")("3uME3agK875dtxnjIw7ar5AhT");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
