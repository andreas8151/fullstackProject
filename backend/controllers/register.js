//crypto
const bcrypt = require("bcrypt");

const pool = require("../server");

// insert a new user--------
function register(req, res) {
  try {
    const { username, password } = req.body;
    const friends = "";

    const cryptoPassword = bcrypt.hashSync(password, 10);

    const sql =
      "INSERT INTO users (username, password, friends) VALUES (?, ?, ?)";

    pool.execute(sql, [username, cryptoPassword, friends], (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = { register };
