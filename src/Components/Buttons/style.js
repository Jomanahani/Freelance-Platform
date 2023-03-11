import styled from "styled-components";

export const Email = styled.button`
  height: 2.5rem;
  cursor: pointer;
  border-radius: 1.5rem;
  background-color: #108a00;
  color: #f8ffff;
  font-size: 1rem;
  text-align: center;
  border: none;
  outline: none;
  &:hover {
    background-color: #14a800;
  }
`;
export const Apple = styled.button`
  height: 2.5rem;
  cursor: pointer;
  border-radius: 1.5rem;
  background-color: white;
  color: black;
  font-size: 1rem;
  text-align: center;
  border: 1px solid black;
  outline: none;
`;
export const Google = styled.button`
  height: 2.5rem;
  cursor: pointer;
  border-radius: 1.5rem;
  background-color: #4285f4;
  color: #f8ffff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  &>p{
    text-align: center;
    margin: 0 auto;
  }
`;
export const SignUp = styled.button`
  height: 2.5rem;
  width: 55%;
  margin: 1.2rem auto;
  cursor: pointer;
  border-radius: 1.5rem;
  background-color: white;
  color: #108a00;
  font-size: 1rem;
  text-align: center;
  border: 2px solid #108a00;
  outline: none;
  &:hover {
    background-color: #f2f7f2;
  }
  & > a {
    color: #108a00;
    text-decoration: none;
  }
`;
export const GoogleIcon = styled.div`
height: 2.5rem;
width: 2.5rem;
font-size: 1.2rem;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
align-self: flex-start;
`