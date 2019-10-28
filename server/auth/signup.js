const router = require("express").Router();
const User = require("../db");

router.post("/", async (req, res, next) => {
  // this 'req.body' should be changed or else it would be really easy to create an admin user from Postman or something like that. SECURITY RISK.
  try {
    let newUser = await User.create(req.body);

    if (newUser) {
      req.login(newUser, err => {
        if (err) next(err);
        else res.send(newUser);
      });
    } else res.status(404).send("Error creating new user.");
  } catch (error) {
    next(err);
  }
});
