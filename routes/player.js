const express = require("express");
const router = express.Router();
const player_controller = require("./../controllers/playerController");

router.get("/add/:name/:nflId", player_controller.add_player_to_database);

module.exports = router;
