import React from 'react';
import '../App.css';
import styled from 'styled-components';
import LoadingGif from "../icons/ball.gif";
import {TextField } from '../components/basic-components';


const StyledFooter = styled.div`
    margin: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;
`;

export const TextFieldBig = styled.p`
   margin: 1rem;
   font-size: 2rem;
`;

const StyledGif = styled.img`
    margin: 0 auto;

`;
export default function Loading() {
    return (
        <StyledFooter>
            <StyledGif src={LoadingGif} alt="loading..." />
            <TextFieldBig>Velkommen til feiringen av tannlegen og pasienten...</TextFieldBig>
            <TextField>Du er litt tidlig ute, gjerne ta turen tilbake litt senere!</TextField>

        </StyledFooter>
    );
}

