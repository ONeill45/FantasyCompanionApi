const express = require("express");
const router = express.Router();
const database_controller = require("./../controllers/databaseController");

router.get("/owner/:firstName?", database_controller.owner);
router.get("/games", database_controller.games);
router.get("/seasons", database_controller.seasons);
router.get("/ownerseasons", database_controller.owner_seasons);
router.get("/gametypes", database_controller.game_types);
router.get("/game_players", database_controller.game_players);

module.exports = router;
