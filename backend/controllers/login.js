const pool = require("../server");

//crypto
const bcrypt = require("bcrypt");

const { validateUser } = require("./validationSchema/validation");

function login(req, res) {
  try {
    const { username, password } = req.body;
    console.log("🚀 ~ file: login.js:11 ~ login ~ password:", password.length)

    /*     const response = validateUser(username, password); */

    const sql = "SELECT password FROM users WHERE username = ?";

    pool.execute(sql, [username], (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else if (password.length > 0) {
        const cryptoPassword = result[0].password;
        const isPasswordMatch = bcrypt.compareSync(password, cryptoPassword);

        if (isPasswordMatch) {
          res.cookie("authToken", "jallla", {
            maxAge: 10 * 360000,
            sameSite: "none",
            secure: true,
          });

          res.sendStatus(200);
        }
      } else {
        res.sendStatus(400);
      }
    });
  } catch (error) {
    res.send(error);
  }
}

module.exports = { login };
