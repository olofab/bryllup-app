import React from 'react';
import './App.css';
import styled from 'styled-components';
import {ReactComponent as Hotel} from "./icons/hotel.svg";
import styles from "./styles";


const StyledArticle = styled.article`
    padding: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;
    background-color: ${styles.main.colors.background.linen80};

`;

const Title = styled.div`
    margin: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.5rem;
    text-align: center;
    color: ${styles.main.colors.background.text};
`;


const HotelIcon = styled(Hotel)`
    height: 60px;
    width: 60px;
`;
export default function Overnatting() {
    return (
        <StyledArticle>
            <HotelIcon/>
            <Title>Overnatting</Title>
            <p>Her kommer det info om hotel og overnatting</p>
        </StyledArticle>

    );
}