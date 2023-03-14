import React from "react";
import styled from "styled-components";
import {SearchInput} from '../Header/style'
import { BsSearch } from 'react-icons/bs'

export const SearchContainer = styled.div`
    display: flex;
    margin: 1.5rem 0;
`
export const MainSearch = styled(SearchInput)`
height: 2.5rem;
width: 100%;
border-radius: 0.6rem 0 0 0.6rem;
`;
export const SearchBut = styled.button`
height: 2.5rem;
width: 3rem;
border-radius:0 0.6rem 0.6rem 0;
background-color: #0ea602;
border: none;
outline: none;
color: white;
font-size: 1rem;    
font-weight: 600;
padding: 0.3rem;
`;
export default function SearchBar() {
  return (
    <SearchContainer>
      <MainSearch placeHolder='Search for job'/>
      <SearchBut><BsSearch/></SearchBut>
    </SearchContainer>
  );
}
