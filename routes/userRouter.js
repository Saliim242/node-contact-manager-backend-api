const express = require("express");
const {
  logingUser,
  registerUser,
  getCurrentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandller");
const router = express.Router();

// User login Route
router.route("/login").post(logingUser);

// User registration Route
router.route("/registor").post(registerUser);
// Get Current  User Information Route
router.get("/current", validateToken, getCurrentUser);

module.exports = router;
