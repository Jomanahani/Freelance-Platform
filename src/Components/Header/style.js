import styled from "styled-components";
import { FormNav } from "../FormHeader";

export const HomeHeader = styled(FormNav)`
position: static;
  li:hover {
    color: #1aa40d;
  }
  & > div{
    display: flex;
    align-items: center;
  }
`;
export const NavOptions = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
  & li {
    list-style: none;
  }
`;

export const NavItem = styled.li`
position: relative;
  cursor: pointer;
  & > li {
    display: flex;
    align-items: center;
    padding: 0 6px;
    font-size: 1rem;
    font-weight: 500;
  }
  & > ul {
    display: none;
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 10rem;
    padding: 8px;
  }
  &:hover > ul {
    display: block;
    background-color: #ffffff;
  }
  &:hover > ul >li{
    padding: 7px;
    margin: 1px 0;
  }
  &:hover > ul >li:hover{
    background-color: #1aa40d;
    color: white;
  }
`;
export const NavIcons = styled.div`
display: flex;
`;

export const SearchInput=styled.input`
height: 2.3rem;
padding: 0.5rem 1.5rem;
position: relative;
outline: none;
border: 1px solid #ccc;
border-radius: 1.5rem;
width: 16rem;
background-color: #fff;
`