import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { API_URL } from "../../config/api";
import { useAuthContext } from "../../Context/authContext";
import { Spinner } from "../../Global/style";
import { LoginSchema } from "../../Validation/login";
import EmailButton, {
  AppleButton,
  GoogleButton,
  SignUpButton,
} from "../Buttons";
import FormInput from "../FormInput";
import OR from "../OR";
import { SignForm, LoginTitle, Error } from "./style";

export default function LoginForm() {
  const { loading, setLoading, setToken, setIsAuthorized } = useAuthContext();

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/users/login`, {
        email,
        password,
      });

      if (res) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        setIsAuthorized(true);
      }
    } catch (err) {
      console.log(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit,
  });

  return (
    <SignForm onSubmit={formik.handleSubmit}>
      <LoginTitle>Log in to Upwork</LoginTitle>
      <div>
        <FormInput
          id="email"
          name="email"
          placeholder="Username or Email"
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
          placeholder="Enter Your Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <Error>{formik.errors.password}</Error>
        )}
      </div>
      <EmailButton title={loading ? <Spinner /> : "Continue with Email"} />
      <OR text="or" />
      <GoogleButton />
      <AppleButton />
      <OR signUp text="Don`t have an Upwork account?" />
      <SignUpButton />
    </SignForm>
  );
}
