const express = require("express");
const { Data } = require("./Data");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send(Data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
