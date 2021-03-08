const router = require("express").Router();
const handleSignIn = require("../controllers/authController");



router.post("/login", handleSignIn);

module.exports = router;