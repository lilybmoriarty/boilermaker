const router = require("express").Router();

router.use("/login", require("./login"));
router.use("/logout", require("./logout"));
router.use("/signup", require("./signup"));

module.exports = router;
