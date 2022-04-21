import React from 'react';
import '../App.css';
import styled from 'styled-components';
import {ReactComponent as Hotel} from "../icons/hotel.svg";
import styles from "../styling/styles";
import {TitleWithUnderline} from "../components/Title";
import { TextField } from '../components/basic-components';


const StyledArticle = styled.article`
    padding: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;
    background-color: ${styles.main.colors.background.linen80};
    min-height: 60vh;

`;

const HotelIcon = styled(Hotel)`
    margin: auto;
    height: 60px;
    width: 60px;
`;
export default function Overnatting() {
    return (
        <StyledArticle>
            <TitleWithUnderline  title={"Overnatting"}/>
            <TextField>Her kommer det info om hotel og overnatting</TextField>
        </StyledArticle>

    );
}