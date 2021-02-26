const express = require("express");
const app = express();
const user = require("users");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server started");
});

app.get("/", (req, res) => {
  res.send("Hello");
})

