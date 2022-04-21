import React from 'react';
import '../App.css';
import styled from 'styled-components';
import {TitleWithUnderline} from "../components/Title";
import { Button } from "@chakra-ui/button"
import {chakra} from "@chakra-ui/react";
import {TextField} from "../components/basic-components";
import background from '../images/145.jpg';


const StyledArticle = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;

    background-image: url(${background});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    
    min-height: 90vh;

`;

const WhiteBox = styled.div`
    max-width: 48em;
    background-color: #fff;
    padding: 6em 2em;    
    margin: 3rem;
    height: 100%;
    border:1px #6a98bc solid;
    
     @media(max-width: 800px) {
        font-size: 1.2rem;
        max-width: 18em;
        
    }
`;

const StyledButton = chakra(Button, {
    baseStyle: {
        background: "#6a98bc",
        color: "white"
    },
})


export default function RSVP() {
    return (
        <StyledArticle>
            <WhiteBox>
                <TitleWithUnderline  title={"Påmelding"}/>

                <TextField>For å få oversikt over hvem som kommer ønsker vi å høre fra deg før 1. april 2023</TextField>
                <StyledButton>Klikk her for å registrere deg</StyledButton>
            </WhiteBox>

        </StyledArticle>

    );
}