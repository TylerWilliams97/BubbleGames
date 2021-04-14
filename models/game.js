const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema ({
title: {
  type: String,
  trim: true,
  },
materials:{
  type: String,
},
description: {
  type: String,
},
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;