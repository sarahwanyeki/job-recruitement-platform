const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");

// Routes Imports
const { jobRoute } = require("./routes");

// mongoDB imports
const connectMongodb = require("./init/mongodb");

// init app
const app = express();

// connect database
connectMongodb();

// third-party middleware
app.use(express.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500", extended: true }));
app.use(morgan("dev"));

// route section
app.use("/api/v1/auth", jobRoute);

// app exports
module.exports = app;
