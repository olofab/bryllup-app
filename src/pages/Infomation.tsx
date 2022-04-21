import React, {ReactComponentElement} from 'react';
import '../App.css';
import styled from 'styled-components';
import styles from "../styling/styles";
import {TitleWithUnderline} from "../components/Title";
import {ChurchIcon, PartyIcon, RingIcon } from '../styling/icons';
import { Underline } from '../components/basic-components';
import {loremipsum} from "./TheWedding";



const StyledTop = styled.article`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Gilda Display', serif;
    font-size: 1rem;
       
   
`;
const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow:1;
`;

const Wrapper = styled.div`
    background-color: ${styles.main.colors.background.fluffyWhite};
    padding: 4rem;
    min-height: 70vh;
        display: flex;
    justify-content: center;
    align-items: center;

    

`;

const RowOne = styled.div`
    display: block;
    margin: 3rem 0rem 3rem 0rem;
    
`;

const RowTwo = styled.div`
       display: flex;
        justify-content: center;
        flex-direction: row;
    margin: 3rem 0rem 3rem 0rem;

 @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;

const Title = styled.div`
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    letter-spacing: .2em;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 1rem;
    color: #b18f3a;
`;

const Description = styled.p`
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    color: ${styles.main.colors.background.text};
    margin-top: 1rem;

`;

interface Props {
    title: string;
    time?: string;
    description: string;
    icon: ReactComponentElement<any>;
}




const InfomationComponent = (props : Props) => {
    return (
        <StyledSection>
            {props.icon}
            <Title>{props.title}</Title>
            <Underline/>
            <Description>{props.time}</Description>
            <Description>{props.description}</Description>
        </StyledSection>
    )
}


export default function Infomation() {
    return (
        <Wrapper>
            <StyledTop>
                <RowOne>
                    <InfomationComponent title={"Vår bryllupsdag"} time={"Lørdag 24 juni 2023"} description={loremipsum} icon={<RingIcon/>}/>
                </RowOne>
                <RowTwo>
                    <InfomationComponent title={"Seremoni"} time={"Oppmøte kl 13:00"} description={loremipsum} icon={<ChurchIcon/>}/>
                    <InfomationComponent title={"Middag"} time={"Skåtøy Kafe klokken 17:00"} description={loremipsum} icon={<PartyIcon/>}/>
                </RowTwo>
            </StyledTop>
        </Wrapper>

    );
}

