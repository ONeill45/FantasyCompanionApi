const request = require("request");
const cheerio = require("cheerio");

//example: http://localhost:3000/player/add/andydalton/2495143
exports.add_player_to_database = function(req, res) {
  const startTime = new Date();
  request(
    `http://www.nfl.com/player/${req.params.name}/${req.params.nflId}/profile`,
    (error, response, body) => {
      if (response && response.statusCode) {
        const $ = cheerio.load(body);
        const newPlayer = {};

        // get basic player data
        const name = $(".player-name")
          .text()
          .trim();
        newPlayer.firstName = name.split(" ")[0];
        newPlayer.lastName = name.split(" ")[1];

        newPlayer.team = $(".player-team-links")
          .children()
          .first()
          .text();

        const numberAndPosition = $(".player-number").text();
        newPlayer.jerseyNumber = numberAndPosition.split(" ")[0];
        newPlayer.position = numberAndPosition.split(" ")[1];

        const heightIndex = body.indexOf("Height</strong>:") + 17;
        newPlayer.height = body.substring(heightIndex, heightIndex + 3);

        const weightIndex = body.indexOf("Weight</strong>:") + 17;
        newPlayer.weight = body.substring(weightIndex, weightIndex + 3);

        const ageIndex = body.indexOf("Age</strong>:") + 14;
        newPlayer.age = body.substring(ageIndex, ageIndex + 2);

        const collegeIndex = body.indexOf("College</strong>:") + 18;
        const containsCollege = body.substring(collegeIndex, collegeIndex + 50);
        newPlayer.college = containsCollege.substring(
          0,
          containsCollege.indexOf("</p>")
        );

        // get recent game data
        const recentGames = [];
        const recentGamesHTML = cheerio.load(
          $("#player-stats-wrapper")
            .children()
            .first()
            .children("tbody")
        );
        const firstTr = recentGamesHTML(".CINLink")
          .last()
          .text();

        // get career stats data
        const careerStats = [];
        const careerStatsHTML = $("#player-stats-wrapper")
          .children()
          .last();

        // return new player
        const endTime = new Date();
        const elapsedTime = (endTime - startTime) / 1000;
        res.render("response", {
          title: "Add Player Response",
          elapsedTime: elapsedTime,
          response: recentGamesHTML
          // response: JSON.stringify(newPlayer)
        });
      } else {
        console.log("error:", error);
        res.send();
      }
    }
  );
};
