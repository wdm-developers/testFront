const express = require("express");
const app = express();
const port = 3001;
const numbers = ["1", "2", "3", "4", "5", "6"];
var cors = require("cors");
const helmet = require("helmet");
app.use(cors());
app.use(helmet());

app.get("/api", (req, res) => {
  res.json(numbers);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
