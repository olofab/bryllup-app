import React from 'react';
import './App.css';
import styled from 'styled-components';
import {ReactComponent as Hotel} from "./icons/hotel.svg";
import styles from "./styles";
import {TitleWithUnderline} from "./Components/Title";


const StyledArticle = styled.article`
    padding: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;
    background-color: ${styles.main.colors.background.linen80};

`;

const HotelIcon = styled(Hotel)`
    margin: auto;
    height: 60px;
    width: 60px;
`;
export default function Overnatting() {
    return (
        <StyledArticle>
            <HotelIcon/>
            <TitleWithUnderline  title={"Overnatting"}/>
            <p>Her kommer det info om hotel og overnatting</p>
        </StyledArticle>

    );
}