const config = require('./config/db');
const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const sql = require('mssql/msnodesqlv8');

const app = express();
app.use(bodyParser.json());

var server = app.listen(process.env.PORT || 8000, () => {
    let port = server.address().port;
    console.log('We are live on ' + port);
});
var executeQuery = function(res, query) {
    sql.close();
    sql.connect(config.dbConfig, (err, database) => {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            var request = new sql.Request();
            request.query(query, function(err, response){
                if(err) {
                    console.log(err);
                    res.send(err);
                }
                else {
                    console.log(response);
                    res.send(response);
                }
            });
        }
        //require('./app/routes')(app, database);
        
    });
}

app.get('/api/Games', function(req, res){
    var query = "select * from [dbo].[game]";
    executeQuery(res, query);
});
app.get('/api/Owners', function(req, res){
    var query = "select * from [dbo].[TeamOwner]";
    executeQuery(res, query);
});
app.get('/api/Seasons', function(req, res){
    var query = "select * from [dbo].[Season]";
    executeQuery(res, query);
});
app.get('/api/OwnerSeasons', function(req, res){
    var query = "select * from [dbo].[OwnerSeason]";
    executeQuery(res, query);
});
app.get('/api/GameTypes', function(req, res){
    var query = "select * from [dbo].[GameType]";
    executeQuery(res, query);
});
app.get('/api/GamePlayers', function(req, res){
    var query = "select * from [dbo].[GamePlayer]";
    executeQuery(res, query);
});