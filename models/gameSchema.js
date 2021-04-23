const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema ({
name: {
  type: String,
  trim: true,
  required: "Game Name",
},
Description:{
  type: String,
  unique: true,
  required:"Game Description"
},
picturelink: {
  type: String,
  trim: true,
  required:"Link for Picture"
},
supplies: {
    type: String,
    trim: true,
    required: "supplies for game"
},
playernumber: {
  type: Number,
  trim: true,
  required: "Amount of Players"
},
slug: {
  type: String,
  trim: true,
  required: "Loading Slug"
}




});

const game = mongoose.model("game", gameSchema);

module.exports = game;