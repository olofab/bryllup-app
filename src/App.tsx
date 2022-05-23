import React from 'react';
import './App.css';
import Header from "./pages/Header";
import styled from "styled-components";
import Infomation from "./pages/Infomation";
import Footer from "./pages/Footer";
import Overnatting from "./pages/Overnatting";
import RSVP from "./pages/RSVP";
import styles from "./styling/styles";
import FAQ from "./pages/FAQ";
import TheWedding from "./pages/TheWedding";
import {ChakraProvider} from "@chakra-ui/react";
import MainPage from "./pages/MainPage";
import Schedule from "./pages/Schedule";
import Loading from "./pages/Loading";

const MainImage = styled.div`
    background-color: ${styles.main.colors.background.linen80};
    text-align: center;
font-family: 'Dancing Script', cursive;
font-size: 3rem;
align-items: center;
display: flex;
justify-content: center;
 `;

function FerdigNettside(){
    return (
        <ChakraProvider>
            <Loading/>
            <Header/>
            <MainPage/>
            <Infomation/>
            <Overnatting/>
            <TheWedding/>
            <RSVP/>
            <Schedule/>
            <FAQ/>
            <Footer/>
        </ChakraProvider>
    )
}

function App() {
  return (
      <ChakraProvider>
        <Loading/>
      </ChakraProvider>

          );
}

export default App;
