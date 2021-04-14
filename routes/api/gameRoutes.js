const router = require("express").Router();
const Game = require("../../models/game");

router.post("/", (req,res) => {
  const { title, materials, description } = req.body
  Game.create({
    title: title,
    materials: materials,
    description:description
  }).then (game => res.json(game)).catch(err => res.status(422).end());
});

module.exports = router;