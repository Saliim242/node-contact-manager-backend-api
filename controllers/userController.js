const asyncHandler = require("express-async-handler");

//@desc Login User
//@route POST /api/users/login
//@access public

logingUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required");
  }

  res.status(200).json({ message: "Login successfully" });
});

//@desc Registor new User
//@route POST /api/users/register
//@access public

registerUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "User registered successfully" });
});

//@desc Get Current User
//@route POST /api/users/current
//@access public

getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User details" });
});

//... other routes for user management go here.

module.exports = { logingUser, registerUser, getCurrentUser };
