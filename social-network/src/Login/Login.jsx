import { Field, reduxForm } from "redux-form";
import { Input } from "../components/common/FormsControls/FormsControls";
import { requiered } from "../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../redux/auth-reducer";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="Login">Login</label>
        <Field
          name="email"
          placeholder="Email"
          validate={[requiered]}
          component={Input}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <Field
          validate={[requiered]}
          name="password"
          placeholder="password"
          component={Input}
          type="password"
        />
      </div>
      <div>
        <Field name="rememberMe" component={Input} type="checkbox" />
        remember me
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

export default connect(null, { login })(Login);



