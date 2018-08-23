const request = require("request");

//example: http://localhost:3000/player/add/andydalton/2495143
exports.add_player_to_database = function(req, res) {
  request(
    `http://www.nfl.com/player/${req.params.name}/${req.params.nflId}/profile`,
    (error, response, body) => {
      if (response && response.statusCode) {
        console.log(body.length);
        res.send();
      } else {
        console.log("error:", error);
        res.send();
      }
    }
  );
};
