const request = require("request");
const cheerio = require("cheerio");

//example: http://localhost:3000/player/add/andydalton/2495143
exports.add_player_to_database = function(req, res) {
  request(
    `http://www.nfl.com/player/${req.params.name}/${req.params.nflId}/profile`,
    (error, response, body) => {
      if (response && response.statusCode) {
        // const newPlayer = new Player();

        const $ = cheerio.load(body);
        const height = $(".player-info").text();
        console.log(height);

        // get basic player data
        // const heightIndex = body.indexOf("Height</strong>:") + 17;
        // newPlayer.height = body.substring(heightIndex, heightIndex + 3);
        // console.log(`height ${height}`);
        // get recent game data

        // get career stats data

        res.send();
      } else {
        console.log("error:", error);
        res.send();
      }
    }
  );
};
