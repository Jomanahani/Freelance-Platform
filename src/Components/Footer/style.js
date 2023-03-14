import styled from "styled-components";

export const MainFooter = styled.footer`
  width: 90%;
  position: relative;
  bottom: 1.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #001e00;
  color: #fff;
  border-radius: 0.5rem;
`;

export const FooterUl = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  ul > li {
    padding: 0.3rem 0;
    list-style: none;
    font-size: 1rem;
  }

  & ul > li:hover {
    color: #0ea602;
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const Icons = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff;
  &>div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
`;
export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 50%;
  background-color: transparent;
  color: white;
  margin: 0 0.3rem;
`;


export const CopyRight = styled.div`
  margin: 7px auto;
  letter-spacing: 1px;
  font-size: 0.6rem;

`;
