import React from "react";

import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { Apple, Email, Google, GoogleIcon, SignUp } from "./style";
import { Link } from "react-router-dom";
import { PATHS } from "../../Router";

export default function EmailButton(props) {
  return <Email type="submit">{props.title}</Email>;
}

export function AppleButton() {
  return <Apple>{<DiApple />}Continue with Apple</Apple>;
}

export function GoogleButton() {
  return (
    <Google>
      <GoogleIcon>
      <FcGoogle />
      </GoogleIcon>
      <p>Continue with Google</p>
    </Google>
  );
}

export function SignUpButton() {
  return (
    <SignUp>
      <Link to={PATHS.SIGNUP}>Sign Up</Link>
    </SignUp>
  );
}
