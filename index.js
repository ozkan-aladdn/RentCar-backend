"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
app.use(express.json());

require("./src/config/dbConnection")();

app.use("/car",require("./src/routes/car"));

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome car Store.",
  });
});

/* ------------------------------------------------------- */
require("express-async-errors");

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
