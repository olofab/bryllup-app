import React from 'react';
import '../App.css';
import styled from 'styled-components';
import theme from '../styling/styles';
import {ScrollIcon} from "../styling/icons";


const Hero = styled.div`
    display: flex;

    justify-content: space-around;
    flex-direction: column;
    min-height: 100vh;
    padding: 3rem 1rem 1rem 1rem;
    font-family: 'Gilda Display', serif;

    height: 50rem;
    width: 100%;
    background-image: url("https://s3.amazonaws.com/ameliaandsteveassets/topo.svg");
    background-color: #f9ad81;
    color: ${theme.main.colors.background.fluffyWhite};
    text-align: center;

    
`;

const Undertittel = styled.div`
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: .2em;
`;

const Scroll = styled.div`
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: .2em;
`;
const Hovedtittel = styled.div`
font-family: 'Gilda Display', serif;
font-size: 8rem;
text-transform: lowercase;
letter-spacing: 0;

`;

const SiteTitle = styled.div`
    align-content: center;
    align-self: center;
    text-align: center;
`;
export default function MainPage() {
    return (
        <Hero>
            <SiteTitle>
                <Hovedtittel>ANNE KAROLINE & PHILIP</Hovedtittel>
                <Undertittel>SKAL GIFTE SEG</Undertittel>
            </SiteTitle>
            <div>
            <Scroll>Scroll ned for mer informasjon</Scroll>
            <ScrollIcon/>

            </div>
        </Hero>

    );
}