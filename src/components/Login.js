import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  userPassword: Yup.string()
    .min(4, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
});
const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={{ userName: "", userPassword: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log("values", values, actions);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ errors, touched }) => (
          <Form className="login-form">
              <Field name="userName" className="form-field" />
              {errors.userName && touched.userName ? (
                <div>{errors.userName}</div>
              ) : null}
              <Field name="userPassword" type="password" className="form-field" />
              {errors.userPassword && touched.userPassword ? (
                <div>{errors.userPassword}</div>
              ) : null}

            <button className="submit-btn" type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Login;
