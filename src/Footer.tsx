import React from 'react';
import './App.css';
import styled from 'styled-components';


const StyledFooter = styled.footer`
    margin: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;

`;
export default function Footer() {
    return (
        <StyledFooter>
                Har dere spørsmål ta kontakt med Anne Karoline på 11223344 eller Philip på 11223344
        </StyledFooter>
    );
}

