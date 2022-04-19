import React from 'react';
import './App.css';
import styled from 'styled-components';
import {ReactComponent as Letter} from "./icons/rsvp.svg";
import styles from './styles'

const StyledArticle = styled.article`
    padding: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;
    background-color: ${styles.main.colors.background.lightBlue};
`;

const Title = styled.div`
    margin: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.5rem;
    text-align: center;
`;


const LetterIcon = styled(Letter)`
    height: 60px;
    width: 60px;
`;
export default function RSVP() {
    return (
        <StyledArticle>
            <LetterIcon/>
            <Title>RSVP</Title>
            <p>For å få oversikt over hvem som kommer ønsker vi å høre fra deg før 1. april 2023</p>
        </StyledArticle>

    );
}