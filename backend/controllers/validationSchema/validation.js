// Validation package
const joi = require("joi");

// Validation
const validateInput = joi.object({
  username: joi.string().min(3).max(30).required(),
  password: joi.string().min(3).max(30).required(),
});

function validateUser(username, password) {
  const result = validateInput.validate({
    username,
    password,
  });
  return result;
}

module.exports = { validateUser };

/* if (validate.error) {
  return res.status(400).send(validate.error.details[0].message);
} else {
  res.json({ message: "Validation passed" });
} */
