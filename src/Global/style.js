import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle =createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
export const Spinner = styled.div`
  border: 3px solid #fff;
  border-top: 3px #000 solid;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 0 auto;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Container =styled.div`
padding: 2% 15%;
`