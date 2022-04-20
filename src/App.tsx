import React from 'react';
import './App.css';
import Header from "./Header";
import styled from "styled-components";
import Infomation from "./Infomation";
import Footer from "./Footer";
import Overnatting from "./Overnatting";
import RSVP from "./RSVP";
import styles from "./styles";

const MainImage = styled.div`
widht: 100%;
height: 300px;
    background-color: ${styles.main.colors.background.linen80};
    text-align: center;
font-family: 'Dancing Script', cursive;
font-size: 3rem;
align-items: center;
display: flex;
justify-content: center;
 `;

function App() {
  return (
    <>
        <Header/>
        <MainImage>
          Vi ønsker å dele det beste øyeblikket med deg!
         </MainImage>
        <Infomation/>
        <Overnatting/>
        <RSVP/>
        <MainImage>
            Program
        </MainImage>
        <MainImage>
            FAQ
        </MainImage>
        <Footer/>
    </>
  );
}

export default App;
