const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ heartbeat: "badum badum badum" });
});

module.exports = app;
