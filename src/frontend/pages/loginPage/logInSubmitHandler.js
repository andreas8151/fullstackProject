import axios from "axios";

export const logInSubmitHandler = async function login(
  inputName,
  inputPassword
) {
  try {
    const data = await axios.post(
      "http://localhost:5050/routes/login",
      {
        username: inputName,
        password: inputPassword,
      },
      {
        withCredentials: true,
      }
    );
    const res = await data.status;

    if (res === 200) {
      alert("Login Successful");
      window.location.href = "/loggedIn";
      localStorage.setItem("user", inputName);
      return res;
    }
    return res;
  } catch (error) {
    const res = error.response.data;
    return res;
  }
};
