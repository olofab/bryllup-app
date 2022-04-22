import React from 'react';
import '../App.css';
import styled from 'styled-components';
import {TitleWithUnderline, WhiteTitleWithUnderline} from "../components/Title";
import {Adress, ColumnCenter, Name, RowCenter, TextField, Underline, UnderlineGold} from '../components/basic-components';
import { SuitcaseIcon } from '../styling/icons';
import {loremipsum} from "./TheWedding";
import { losji } from "../content/losji";

const StyledArticle = styled.article`
    padding: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;
    background-color: #6a98bc90;
    min-height: 40vh;
`;

const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 4rem 2rem 4rem;
    
    @media(max-width: 800px) {
        flex-direction: column;
        margin 0.5rem;
        align-items: center;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 4rem 8rem 4rem 8rem;
    
    @media(max-width: 800px) {
        padding: 1rem;
            flex-direction: column;

    }
`;

const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 4rem 2rem 4rem;

    @media(max-width: 800px) {
        flex-direction: column;
        margin 0.5rem;
        align-items: center;
    }
`;

const InfoBox = styled.div`
       display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 50%
     @media(max-width: 800px) {
        max-width: 100%
    }
`;

const Lenke = styled.a`
   margin: 1rem;
`;

export const HotelName = styled.p`
   font-size: 1.2rem;
   font-weight: bold;
   margin: 1rem 1rem 0rem 1rem;
   letter-spacing: .1em;

`;

export default function Overnatting() {
    const hotel1 = losji.hoteller[0];
    const hotel2 = losji.hoteller[1];
    return (
        <StyledArticle>
            <TitleWithUnderline  title={"Losji"}/>
            <TextField>Her kommer det info om hotel og overnatting</TextField>
            <Wrapper>
                <ContentLeft>
                    <SuitcaseIcon/>
                    <InfoBox>
                    <HotelName>{hotel1.name}</HotelName>
                    <Adress>{hotel1.adress}</Adress>
                    <Underline/>
                    <TextField>{loremipsum}</TextField>
                     <Lenke href={losji.hoteller[0].website} target="_blank">Hjemmeside</Lenke>
                    </InfoBox>
                </ContentLeft>
                <ContentRight>
                    <SuitcaseIcon/>
                    <InfoBox>
                        <HotelName>{hotel2.name}</HotelName>
                        <Adress>{hotel2.adress}</Adress>
                    <Underline/>
                    <TextField>{loremipsum}</TextField>
                        <Lenke href={losji.hoteller[0].website} target="_blank">Hjemmeside</Lenke>
                    </InfoBox>
                </ContentRight>
            </Wrapper>
            <ColumnCenter>
                <UnderlineGold/>
                <HotelName>Andre alternativ</HotelName>
                <TextField>{loremipsum}</TextField>
                <TextField>{loremipsum}</TextField>
            </ColumnCenter>
        </StyledArticle>

    );
}