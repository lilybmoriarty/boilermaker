const router = require("express").Router();
const User = require("../db");

// logic to handle logging in
router.put("/", async (req, res, next) => {
  try {
    let currUser = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    // if the user doesnt exist in database
    if (!currUser) {
      res.status(401).send("User not found");
    }
    // if the password is incorrectly entered
    else if (!user.hasMatchingPassword(req.body.password)) {
      res.status(401).send("Incorrect password");
    }

    // if everything checks out then login this user
    else {
      req.login(user, err => {
        if (err) next(err);
        else res.send(user);
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
