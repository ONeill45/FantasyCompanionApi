const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const compression = require("compression");

const playerRouter = require("./routes/player");
const indexRouter = require("./routes/index");
const databaseRouter = require("./routes/database");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(compression());
app.use("/", indexRouter);
app.use("/player", playerRouter);
app.use("/api/db", databaseRouter);
module.exports = app;


