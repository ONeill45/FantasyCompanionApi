const express = require("express");
const router = express.Router();
const player_controller = require("./../controllers/playerController");

router.get("/:firstName-:lastName", player_controller.player_stats_by_year);

module.exports = router;
