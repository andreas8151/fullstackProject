const pool = require("../server");

//crypto
const bcrypt = require("bcrypt");

const { validateUser } = require("./validationSchema/validation");

function login(req, res) {
  try {
    const { username, password } = req.body;

    const response = validateUser(username, password);

    const sql = "SELECT password FROM users WHERE username = ?";

    pool.execute(sql, [username], (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        if (result.length > 0) {
          const cryptoPassword = result[0].password;
          const isPasswordMatch = bcrypt.compareSync(password, cryptoPassword);
          if (isPasswordMatch) {
            res.cookie("authToken", "jallla", {
              maxAge: 10 * 360000,
              sameSite: "none",
              secure: true,
            });
            res.sendStatus(200);
          } else {
            res.sendStatus(404);
          }
        } else {
          if (response.error) {
            res.status(404).send(response.error.details[0].message);
          } else {
            res.status(404).send("Wrong username or password");
          }
        }
      }
    });
  } catch (error) {
    res.send(error);
  }
}

module.exports = { login };
