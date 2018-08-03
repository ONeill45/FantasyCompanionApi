const config = require("./config/db");
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
            console.log(response);
            res.send(response);
          }
        });
      }
      //require('./app/routes')(app, database);
    }
  );
};
