const fantasyRoutes = require('./fantasycompanion_routes');

module.exports = function(app, db) {
    fantasyRoutes(app, db);
}