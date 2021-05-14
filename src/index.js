const express = require("express");
const app = express();
const path = require("path");
const { check, validationResult } = require("express-validator");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.post(
  "/",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 chars long")
      .isAlpha()
      .withMessage("Must be only alphabetical chars"),
    check("email").isEmail(),
    check("message").isLength({ min: 3 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const data = {
        success: false,
        errors: errors.array(),
      };

      console.error(data.errors);

      return res.status(422).render("fail", data);
    } else {
      const data = {
        name: req.body.name,
        email: req.body.email,
        category: req.body.category,
        message: req.body.message,
      };

      console.log(data);
      res.render("success");
    }
  }
);

// TODO: V2 - Implement API routes
// app.get("/api/v1/success", (req, res) => {
//   res.json({ message: "success!" });
// });

// app.get("/api/v1/fail", (req, res) => {
//   res.json({ message: "fail... :(" });
// });

app.get("/heartbeat", (req, res) => {
  res.json({ heartbeat: "badum badum badum" });
});

// Docs live here!
app.use("/docs", express.static(path.join(__dirname, "../docs/build")));

module.exports = app;
