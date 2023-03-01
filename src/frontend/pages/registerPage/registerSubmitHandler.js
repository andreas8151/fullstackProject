import axios from "axios";

export const registerSubmitHandler = async (userName, userPassword) => {
  const data = await axios.post("http://localhost:5050/routes/register", {
    username: userName,
    password: userPassword,
  });
  const res = await data.status;

  if (res === 200) {
    alert("Success");
  }
};
