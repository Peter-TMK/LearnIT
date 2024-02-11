const express = require("express");
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// const express = require("express");
// import UserModel from "../models/user.model";
const authRouter = express.Router();
const {
  getUsers,
  loginUser,
  registerUser,
} = require("../controllers/auth.controller");

// User registeration
authRouter.post("/signup", registerUser);

// User login
authRouter.post("/login", loginUser);

// Get Users
authRouter.get("/users", getUsers);

// export default authRouter;
module.exports = authRouter;
