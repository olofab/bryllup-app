import React from 'react';
import './App.css';
import Header from "./Header";
import styled from "styled-components";
import Infomation from "./Infomation";
import Footer from "./Footer";

const MainImage = styled.div`
widht: 100%;
height: 300px;
    background-color: rgba(211,211,211,0.5);
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
          Velkommen til bryllupet vårt!
         </MainImage>
        <Infomation/>
        <MainImage>
            Overnatting
        </MainImage>
        <MainImage>
           RSVP
        </MainImage>
        <Footer/>
    </>
  );
}

export default App;
