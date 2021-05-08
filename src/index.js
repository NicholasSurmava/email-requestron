const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/heartbeat", (req, res) => {
  res.json({ heartbeat: "badum badum badum" });
});

// Docs live here!
app.use("/docs", express.static(path.join(__dirname, "../docs/build")));

module.exports = app;
