const request = require("request");
const apiKey = "xi1bBWh2TrszX38OVmU7L0dKgjMZtaIJ";

//example: http://localhost:8000/api/players/tom-brady
exports.player_stats_by_year = function(req, res) {
  const requestData = {
    api_key: apiKey,
    stats_type: "offense",
    player_name:
      req.params.firstName.substring(0, 1) + "." + req.params.lastName
  };
  request.post(
    { url: "https://profootballapi.com/players", formData: requestData },
    function(err, httpResponse, body) {
      if (err) {
        console.log(err);
      } else if (httpResponse.statusCode == 200) {
        res.send(body);
      }
    }
  );
};
