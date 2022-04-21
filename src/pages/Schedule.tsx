import React from 'react';
import '../App.css';
import styled from 'styled-components';
import styles from "../styling/styles";
import {TitleWithUnderline} from "../components/Title";
import {RowCenter, TextField, Underline} from '../components/basic-components';
import {loremipsum} from "./TheWedding";


const StyledArticle = styled.article`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    padding: 6rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;
    background-color: ${styles.main.colors.background.linen80};
    min-height: 60vh;

`;

const DayLabels = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
     @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;

const Days = styled.li`
    letter-spacing: .2em;
    font-size: 1.5rem;
    text-transform: uppercase;
`;

const Day = styled.div`
    display: flex;
    flex-direction: column;
       margin-bottom: 2rem;

    align-items: center;
`;


export default function Schedule() {
    return (
        <StyledArticle>
            <TitleWithUnderline  title={"Program"}/>
            <DayLabels>
                <Day>
                <Days>
                    Fredag
                </Days>
                    <Underline/>
                <TextField>
                    {loremipsum}
                </TextField>

                </Day>
                <Day>
                <Days>
                    Lørdag
                </Days>
                    <Underline/>
                <TextField>
                    {loremipsum}
                </TextField>
            </Day>
                <Day>
            <Days>
                Søndag
            </Days>
                    <Underline/>
            <TextField>
                {loremipsum}
            </TextField>

        </Day>
            </DayLabels>
        </StyledArticle>

    );
}