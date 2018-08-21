const config = require("../config/db");
const sql = require("mssql/msnodesqlv8");

const executeQuery = function(res, query) {
  sql.close();
  sql.connect(
    config.dbConfig,
    (err, database) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        const request = new sql.Request();
        request.query(query, function(err, response) {
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            res.send(response);
          }
        });
      }
      //require('./app/routes')(app, database);
    }
  );
};
module.exports = {
  games: function(req, res) {
    var query = "select * from [dbo].[game]";
    executeQuery(res, query);
  },
  owner: function(req, res) {
    var query = "select * from [dbo].[TeamOwner]" 
    if(req.params.firstName){
      query += " WHERE vcFirstName = '" + req.params.firstName + "'";
    }
    
    executeQuery(res, query);
  },
  seasons: function(req, res) {
    var query = "select * from [dbo].[Season]";
    executeQuery(res, query);
  },
  owner_seasons: function(req, res) {
    var query = "select * from [dbo].[OwnerSeason]";
    executeQuery(res, query);
  },
  game_types: function(req, res) {
    var query = "select * from [dbo].[GameType]";
    executeQuery(res, query);
  },
  game_players: function(req, res) {
    var query = "select * from [dbo].[GamePlayer]";
    executeQuery(res, query);
  },
}
