import React, {ReactComponentElement} from 'react';
import './App.css';
import styled from 'styled-components';
import {ReactComponent as Wedding} from "./icons/wedding.svg";
import {ReactComponent as Party} from "./icons/party.svg";
import {ReactComponent as Rings} from "./icons/rings.svg";
import styles from "./styles";



const StyledTop = styled.header`
    display: flex;
    justify-content: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
       
    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;
const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow:1;
    
 

`;

const Wrapper = styled.div`
    background-color: ${styles.main.colors.background.fluffyWhite};
    padding: 2rem;

`;

const Heading = styled.div`
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 2rem;
    padding: 3rem 0rem 2rem 0rem;
        color: ${styles.main.colors.background.text};


`;

const Title = styled.div`
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.5rem;
    margin-top: 0.5rem;
    color: ${styles.main.colors.background.text};
`;

const Description = styled.p`
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    color: ${styles.main.colors.background.text};

`;

interface Props {
    title: string;
    time?: string;
    description: string;
    icon: ReactComponentElement<any>;
}

const ChurchIcon = styled(Wedding)`
    height: 20%;
    width: 20%;
`;

const PartyIcon = styled(Party)`
    height: 20%;
    width: 20%;
`;

const RingIcon = styled(Rings)`
    color: black;
    height: 20%;
    width: 20%;
`;


const InfomationComponent = (props : Props) => {
    return (
        <StyledSection>
            {props.icon}
            <Title>{props.title}</Title>
            <Description>{props.time}</Description>
            <Description>{props.description}</Description>
        </StyledSection>
    )
}

export default function Infomation() {
    return (
        <Wrapper>
            <Heading>Seremoni og feiring</Heading>
            <StyledTop>
                <InfomationComponent title={"Vår bryllupsdag"} time={"Lørdag 24 juni 2023"} description={"Her kommer det en litt lengre tekst om hvor man skal møte opp og viktig info"} icon={<RingIcon/>}/>
                <InfomationComponent title={"Seremoni"} time={"Oppmøte kl 13:00"} description={"Her kommer det en litt lengre tekst om hvor man skal møte opp og viktig info"} icon={<ChurchIcon/>}/>
                <InfomationComponent title={"Middag"} time={"Skåtøy Kafe klokken 17:00"} description={"Her kommer det en litt lengre tekst om hvor man skal møte opp og viktig info"} icon={<PartyIcon/>}/>
            </StyledTop>
        </Wrapper>

    );
}

