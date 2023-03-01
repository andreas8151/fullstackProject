import Form from "../../components/form/Form";
import { registerSubmitHandler } from "./registerSubmitHandler";


export default function RegisterPage() {
  return (
    <div className="container">
      <Form
        title="Register"
        linkTo="/"
        submitCallback={registerSubmitHandler}
      />
    </div>
  );
}
