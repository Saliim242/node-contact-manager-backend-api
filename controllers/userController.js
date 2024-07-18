const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc Login User
//@route POST /api/users/login
//@access public

logingUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      { expiresIn: "15m" }
    );
    res.status(200).json({ success: true, message: accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

//@desc Registor new User
//@route POST /api/users/register
//@access public

registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const isUserAlreadyExist = await User.findOne({ email });
  if (isUserAlreadyExist) {
    res.status(400);
    throw new Error("User of this email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } else {
    res.status(400).json({ message: "User data is not valid..." });
  }
});

//@desc Get Current User
//@route POST /api/users/current
//@access private

getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, message: req.user });
});

//... other routes for user management go here.

module.exports = { logingUser, registerUser, getCurrentUser };
