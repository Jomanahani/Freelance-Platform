import { Checkbox, FormControlLabel } from "@mui/material";
import axios from "axios";
import { ErrorMessage, useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { API_URL } from "../../config/api";
import { useAuthContext } from "../../Context/authContext";
import { Spinner } from "../../Global/style";
import { PATHS } from "../../Router";
import { SignupSchema } from "../../Validation/Signup";
import EmailButton, { AppleButton, GoogleButton } from "../Buttons";
import FormInput from "../FormInput";
import { Flex, SignForm, LoginTitle, Error } from "../LoginForm/style";
import OR from "../OR";

const Login = styled.p`
  text-align: center;
  font-size: 0.9rem;
  padding: 1rem 0;
  & > a {
    text-decoration: none;
    color: #108a00;
  }
`;

export default function SignupForm() {
  const { loading, setLoading, setErrors, setToken, setIsAuthorized } = useAuthContext();

  const initialValues = {
    FirstName: "",
    LastName: "",
    email: "",
    country: "",
    password: "",
    checked: false,
  };

  const handleSubmit = async (e, { FirstName, email, password }) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/users/signup`, {
        name: FirstName,
        email: email,
        password: password,
      });

      if (res) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        setIsAuthorized(true);
      }
    } catch (error) {
      setErrors(
        error.inner.reduce((errors, error) => {
          errors[error.path] = error.message;
          return errors;
        }, {})
      );
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: SignupSchema,
  });
  console.log("formik.values", formik.values);

  return (
    <SignForm onSubmit={formik.handleSubmit} className="signup">
      <LoginTitle>Sign up to find work you love</LoginTitle>
      <AppleButton />
      <GoogleButton />
      <OR text="or" />
      <Flex>
        <div>
          <FormInput
            id="FirstName"
            name="FirstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.FirstName}
            onBlur={formik.handleBlur}
          />
          {formik.touched.FirstName && formik.errors.FirstName && (
            <Error>{formik.errors.FirstName}</Error>
          )}
        </div>
        <div>
          <FormInput
            id="LastName"
            name="LastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.LastName}
            onBlur={formik.handleBlur}
          />
          {formik.touched.LastName && formik.errors.LastName && (
            <Error>{formik.errors.LastName}</Error>
          )}
        </div>
      </Flex>
      <div>
        <FormInput
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <Error>{formik.errors.email}</Error>
        )}
      </div>
      <div>
        <FormInput
          id="password"
          name="password"
          placeholder="password (8 or more characters)"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <Error>{formik.errors.password}</Error>
        )}
      </div>

      <FormControlLabel
        control={<Checkbox color="success" />}
        label="Send me helpful emails to find rewarding work and job leads. "
      />

      <FormControlLabel
        control={<Checkbox color="success" onChange={formik.handleChange} />}
        label="Yes, I understand and agree to the Upwork Terms of Service , including the User Agreement and Privacy Policy ."
      />
        {formik.touched.checked && formik.errors.checked && (
          <Error>{formik.errors.checked}</Error>
        )}
      <EmailButton title={ loading ? <Spinner />:"Create my account"} />
      <Login>
        Already have an accaunt?<Link to={PATHS.LOGIN}> Logn in </Link>
      </Login>
    </SignForm>
  );
}
