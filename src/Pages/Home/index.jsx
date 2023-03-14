import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar";
import Tab from "../../Components/Tab";
import Wellcome from "../../Components/Wellcome";
import { Container } from "../../Global/style";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Wellcome />
        <SearchBar />
        <Tab />
      </Container>
      <Footer/>
    </>
  );
}
