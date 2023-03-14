import React from "react";
import styled from "styled-components";
import Logo from "../../Assets/Logo.jpg";

export const FormNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  &  img {
    height: 2.7rem;
  }
  & > div > p > span{
    color: #108a00;
  }
  &.login {
    & > div {
      display: none;
    }
  }
`;
export default function FormHeader(props) {
  return (
    <FormNav className={props.login ? "login" : ""}>
      <img src={Logo} alt="logo" />
      <div>
        <p>Here to hire talent?<span> Join as client </span></p>
      </div>
    </FormNav>
  );
}
