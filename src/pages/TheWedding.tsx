import React from 'react';
import '../App.css';
import styled from 'styled-components';
import theme from "../styling/styles";
import {TitleWithUnderline, WhiteTitleWithUnderline} from "../components/Title";
import {DameIcon, MannIcon, PersonIcon } from '../styling/icons';
import {TextField, RowCenter} from '../components/basic-components';
import { PersonCard } from '../components/PersonCard';


const StyledArticle = styled.article`
    display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        flex-direction: column;
        font-family: 'Quicksand', sans-serif;
    color: ${theme.main.colors.background.text};
    font-size: 1rem;
    text-align: center;
    background-color: ${theme.main.colors.background.linen80};
        min-height: 90vh;

`;


 export const loremipsum : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
export default function TheWedding() {
    return (
        <StyledArticle>
            <TitleWithUnderline  title={"Bryllupet"}/>
            <RowCenter>
                <PersonCard name={"Philip Skaugen"} icon={<MannIcon/>}/>
                <PersonCard name={"Anne Karoline Thorstensen"} icon={<DameIcon/>}/>
            </RowCenter>
            <TextField>
                {loremipsum}
            </TextField>
            <RowCenter>
                <PersonCard name={"Forlover"} icon={<PersonIcon/>} description={loremipsum}/>
                <PersonCard name={"Forlover"} icon={<PersonIcon/>} description={loremipsum}/>
                <PersonCard name={"Forlover"} icon={<PersonIcon/>} description={loremipsum}/>
            </RowCenter>
        </StyledArticle>

    );
}