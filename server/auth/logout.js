const router = require("express").Router();
const User = require("../db");

// to log out of the app
router.delete("/", (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.sendStatus(204);
});
