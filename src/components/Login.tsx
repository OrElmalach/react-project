// src/pages/Login.tsx
import { FormikValues, useFormik } from "formik";
import { FunctionComponent, useContext } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { errorMessage, successMessage } from "../services/feedbackService";
import { loginUser } from "../services/userService";
import { decodeToken } from "../services/tokenService";
import UserContext from "../context/userContext";


interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext) || {}; // Use context to set the user

  const formik: FormikValues = useFormik<FormikValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().min(5).required(),
      password: yup
        .string()
        .min(7)
        .max(20)
        .required()
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*\-"])[A-Za-z\d!@#$%^&*\-"]{8,}$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*-"), and be at least 8 characters long'
        ),
    }),
    onSubmit: (values, { resetForm }) => {
      loginUser(values)
        .then((res) => {
          const token = res.data; // Assuming the response returns a token
          sessionStorage.setItem("token", token);
          successMessage(`${values.email} Logged in successfully`);

          // Decode the token and update the user
          const decodedUser = decodeToken(token);
          if (decodedUser && setUser) {
            // Set the user in context with additional info from decoded token
            setUser(res.data);
          }

          navigate("/"); // Navigate to the home page after successful login
        })
        .catch((err) => {
          console.log(err);
          errorMessage(err.response.data);
        });
      resetForm();
    },
  });

  return (
    <div className="w-50 mx-auto py-3">
      <h1 className="display-1 text-center mb-4">Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="jhon@doe.com"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />
          <label htmlFor="email">Email</label>
          {formik.touched.email && formik.errors.email && (
            <p className="text-danger">{formik.errors.email}</p>
          )}
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder=""
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            required
          />
          <label htmlFor="password">Password</label>
          {formik.touched.password && formik.errors.password && (
            <p className="text-danger">{formik.errors.password}</p>
          )}
        </div>
        <button
          disabled={!formik.dirty || !formik.isValid}
          type="submit"
          className="btn btn-primary mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
