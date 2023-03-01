import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import "./form.css";

function Form({ submitCallback, title, linkTo }) {
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [callbackResult, setCallbackResult] = useState("");

  async function submitHandler(event) {
    event.preventDefault();
    const res = await submitCallback(inputName, inputPassword);
    setCallbackResult(res);
  }

  return (
    <>
      <div className="formContainer">
        <form onSubmit={submitHandler}>
          <h1>{title}</h1>
          <label>Username</label>
          <Input
            type="username"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          />
          <label>Password</label>
          <Input
            type="password"
            value={inputPassword}
            onChange={(event) => setInputPassword(event.target.value)}
          />
          <Button type="submit" title="Login" />
          <Link to={linkTo}>
            <button
              type="submit"
              title="To Register"
              className="button registerButton"
            >
              to register
            </button>
          </Link>
        </form>
      </div>
      <p className="callBackResult">{callbackResult}</p>
    </>
  );
}

export default Form;
