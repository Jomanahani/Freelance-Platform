import React from "react";
import styled from "styled-components";

export const OrDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > hr {
    border: none;
    border-bottom: 2px solid #e0e0e0;
    width: 45%;
  }
  & > p {
    padding: 0 1rem;
    font-size: 1rem;
    color: #606060;
    display: block;
    text-align: center;
  }

  &.signUp{
    & > hr {
    width: 12%;
  }
  & > p {
    width: 76%;
  }
  margin-top: 3.3rem;
  }

`;
export default function OR(props) {
  return (
    <OrDiv className={props.signUp?'signUp':''}>
      <hr /> <p>{props.text}</p> <hr />
    </OrDiv>
  );
}
