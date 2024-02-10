const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/api/test", (req, res) => {
  console.log("Hello LMS");
  res.send("Welcome to LMS site");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
