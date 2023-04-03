import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="Login">Login</label>
        <Field name="Login" placeholder="login" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <Field
          name="Password"
          placeholder="password"
          component="input"
          type="text"
        />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" />
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
    console.log(formData);
  };
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

export default Login;
