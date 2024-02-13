const express = require("express");
const config = require("./utils/config");
const app = express();
const cors = require("cors");
// const authRouter = require("./controllers/auth.controller");
const authRouter = require("./routes/auth.route");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

// mongoose.set("strictQuery", false);

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

// mongoose.connect(mongoUrl);

app.use(cors());
app.use(express.json());

// app.get("/api/test", (req, res) => {
//   console.log("Hello LMS");
//   res.send("Welcome to the LMS homepage!");
// });

app.use("/api/auth", authRouter);

module.exports = app;
