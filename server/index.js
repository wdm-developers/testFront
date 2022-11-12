const express = require("express");
const app = express();
const port = 3001;
const numbers = ["1", "2", "3", "4", "5", "6"];
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json(numbers);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
