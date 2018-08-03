const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const player = require("./routes/player");

const app = express();
app.use(bodyParser.json());
app.use(compression());
app.use("/api/player/", player);

module.exports = app;

// var server = app.listen(process.env.PORT || 8000, () => {
//   let port = server.address().port;
//   console.log("We are live on " + port);
// });

// app.get("/api/Games", function(req, res) {
//   var query = "select * from [dbo].[game]";
//   executeQuery(res, query);
// });
// app.get("/api/Owners", function(req, res) {
//   var query = "select * from [dbo].[TeamOwner]";
//   executeQuery(res, query);
// });
// app.get("/api/Seasons", function(req, res) {
//   var query = "select * from [dbo].[Season]";
//   executeQuery(res, query);
// });
// app.get("/api/OwnerSeasons", function(req, res) {
//   var query = "select * from [dbo].[OwnerSeason]";
//   executeQuery(res, query);
// });
// app.get("/api/GameTypes", function(req, res) {
//   var query = "select * from [dbo].[GameType]";
//   executeQuery(res, query);
// });
// app.get("/api/GamePlayers", function(req, res) {
//   var query = "select * from [dbo].[GamePlayer]";
//   executeQuery(res, query);
// });
