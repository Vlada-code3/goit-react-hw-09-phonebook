import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { loginOperation, registerOperation } from "../../redux/auth/authOperations";
import { AuthContainer } from "./AuthStyled";
import schema from "./validation/validator";

const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <>
      <AuthContainer>
        {location.pathname === "/registration" ? <h1>SIGN UP</h1> : <h1>SIGN IN</h1>}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={values => {
            console.log(values);
            location.pathname === "/registration" ? dispatch(registerOperation(values)) : dispatch(loginOperation(values));
          }}
        >
          {(
            { isSubmitting } ///___esli proizoshel subbmit
          ) => (
            <Form>
              <Field className="emailInput" type="email" name="email" placeholder="Write your email" />
              <ErrorMessage name="email" component="div" />
              <Field className="passwordInput" type="password" name="password" placeholder="Write your password" />
              <ErrorMessage name="password" component="div" />
              <button className="btnSign" type="submit" disabled={isSubmitting}>
                {location.pathname === "/registration" ? "SIGN UP" : "SIGN IN"}
              </button>
            </Form>
          )}
        </Formik>
      </AuthContainer>
    </>
  );
};

export default AuthForm;

// class AuthForm extends Component {
//   state = {};
//   render() {
//     return (
//       <>
//         <AuthContainer>
//           {this.props.location.pathname === "/registration" ? <h1>SIGN UP</h1> : <h1>SIGN IN</h1>}
//           <Formik
//             initialValues={{ email: "", password: "" }}
//             validationSchema={schema}
//             onSubmit={values => {
//               console.log(values);
//               this.props.location.pathname === "/registration"
//                 ? this.props.registerOperation(values)
//                 : this.props.loginOperation(values);
//             }}
//           >
//             {(
//               { isSubmitting } ///___esli proizoshel subbmit
//             ) => (
//               <Form>
//                 <Field className="emailInput" type="email" name="email" placeholder="Write your email" />
//                 <ErrorMessage name="email" component="div" />
//                 <Field className="passwordInput" type="password" name="password" placeholder="Write your password" />
//                 <ErrorMessage name="password" component="div" />
//                 <button className="btnSign" type="submit" disabled={isSubmitting}>
//                   {this.props.location.pathname === "/registration" ? "SIGN UP" : "SIGN IN"}
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </AuthContainer>
//       </>
//     );
//   }
// }

// export default connect(
//   null,
//   { registerOperation, loginOperation }
// )(withRouter(AuthForm));
