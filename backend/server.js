//express
const express = require("express");
const app = express();
const port = 5050;

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//cookie
const cookieParser = require("cookie-parser");

//env
require("dotenv").config();

//Database
const mysql = require("mysql2");

//middleware
app.use(express.json());
app.use(cookieParser());

const dataBase = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

const pool = mysql.createPool(dataBase);
module.exports = pool;

// Get all users--------
app.get("/get", (req, res) => {
  try {
    const sql = "SELECT * from users";

    pool.execute(sql, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    });
  } catch (error) {
    res.sendStatus(500);
  }
});

const { routes } = require("./routes/routes");

app.use("/routes", routes);

app.listen(port);
