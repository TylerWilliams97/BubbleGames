// Requiring necessary npm packages
const express = require("express");
const path = require ("path")
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./config/connection");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "./client/build")))
}

// Requiring our routes
app.use(require ("./routes"))
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})


// Syncing our database and logging a message to the user upon success
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
