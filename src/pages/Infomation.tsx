import React, {ReactComponentElement} from 'react';
import '../App.css';
import styled from 'styled-components';
import styles from "../styling/styles";
import { infomation } from "../content/infomation";
import {ChurchIcon, PartyIcon, RingIcon } from '../styling/icons';
import {Adress, Underline } from '../components/basic-components';



const StyledTop = styled.article`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 1rem;
       
   
`;
const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow:1;
    margin: 2rem;
    
`;

const Wrapper = styled.div`
    background-color: ${styles.main.colors.background.fluffyWhite};
        font-family: 'Quicksand', sans-serif;

    padding: 4rem;
    min-height: 70vh;
        display: flex;
    justify-content: center;
    align-items: center;
`;

const RowOne = styled.div`
    padding-bottom: 2rem;
    margin: auto;
    max-width: 50%;
    
     @media(max-width: 800px) {
        max-width: 100%;
    }
    
`;

const RowTwo = styled.div`
       display: flex;
        justify-content: center;
        flex-direction: row;
    margin: 0rem 0rem 3rem 0rem;

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
    adress?: string;
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
            <Adress>{props.adress}</Adress>
            <Description>{props.description}</Description>
        </StyledSection>
    )
}


export default function Infomation() {
    const ourday = infomation.theday;
    const cerimony = infomation.cerimony;
    const party = infomation.party;

    return (
        <Wrapper>
            <StyledTop>
                <RowOne>
                    <InfomationComponent title={"Vår bryllupsdag"} time={ourday.date} description={ourday.description} icon={<RingIcon/>}/>
                </RowOne>
                <RowTwo>
                    <InfomationComponent title={"Seremoni"} time={cerimony.date} adress={cerimony.adress} description={cerimony.description} icon={<ChurchIcon/>}/>
                    <InfomationComponent title={"Middag"} time={party.date} adress={party.adress} description={party.description} icon={<PartyIcon/>}/>
                </RowTwo>
            </StyledTop>
        </Wrapper>

    );
}

