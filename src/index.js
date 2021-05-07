const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.json({ heartbeat: "badum badum badum" });
});

// Docs live here!
app.use("/docs", express.static(path.join(__dirname, "../docs/build")));

module.exports = app;
