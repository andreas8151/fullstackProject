import Form from "../../components/form/Form";
import { logInSubmitHandler } from "./logInSubmitHandler";
import "./loginPage.css";

export default function LoginPage() {
  return (
    <div className="container">
      <Form
        title="Login"
        linkTo="/register"
        submitCallback={logInSubmitHandler}
      />
    </div>
  );
}
