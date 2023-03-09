import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PATHS } from "../../Router";
import EmailButton, { AppleButton, GoogleButton } from "../Buttons";
import FormInput from "../FormInput";
import { Flex, Form, LoginTitle } from "../LoginForm/style";
import OR from "../OR";

const Login = styled.p`
  text-align: center;
  font-size: 0.9rem;
  padding: 1rem 0;
  &>a{
    text-decoration: none;
    color:#108a00;
  }
`;

export default function SignupForm() {
  const handleChange = () => {};

  return (
    <Form className="signup">
      <LoginTitle>Sign up to find work you love</LoginTitle>
      <AppleButton />
      <GoogleButton />
      <OR text="or" />
      <Flex>
        <FormInput id="FirstName" name="FirstName" placeholder="First Name" />
        <FormInput id="LastName" name="Last Name" placeholder="Last Name" />
      </Flex>
      <FormInput id="email" name="email" placeholder="Email" />
      <FormInput
        id="password"
        name="password"
        placeholder="password (8 or more characters)"
      />
      <FormControlLabel
        control={<Checkbox  color="success" onChange={handleChange}/>}
        label="Send me helpful emails to find rewarding work and job leads. "
       
      />
      <FormControlLabel
        control={<Checkbox color="success" onChange={handleChange} />}
        label="Yes, I understand and agree to the Upwork Terms of Service , including the User Agreement and Privacy Policy ."
      />
      <EmailButton title="Create my account" />
      <Login>
        Already have an accaunt?<Link to={PATHS.LOGIN}> Logn in </Link>
      </Login>
    </Form>
  );
}
