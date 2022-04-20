import React, {ReactComponentElement} from 'react';
import './App.css';
import styled from 'styled-components';
import {ReactComponent as Wedding} from "./icons/wedding.svg";
import {ReactComponent as Party} from "./icons/party.svg";
import {ReactComponent as Rings} from "./icons/rings2.svg";
import styles from "./styles";
import {TitleWithUnderline} from "./Components/Title";



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
    margin: 0rem 1rem 0rem 1rem;
`;

const Wrapper = styled.div`
    background-color: ${styles.main.colors.background.fluffyWhite};
    padding: 2rem;

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
    height: 60px;
    width: 60px;
`;

const PartyIcon = styled(Party)`
    height: 60px;
    width: 60px;
`;

const RingIcon = styled(Rings)`
    height: 60px;
    width: 60px;
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
            <TitleWithUnderline  title={"Seremoni og feiring"}/>
            <StyledTop>
                <InfomationComponent title={"Vår bryllupsdag"} time={"Lørdag 24 juni 2023"} description={"Her kommer det en litt lengre tekst om hvor man skal møte opp og viktig info"} icon={<RingIcon/>}/>
                <InfomationComponent title={"Seremoni"} time={"Oppmøte kl 13:00"} description={"Her kommer det en litt lengre tekst om hvor man skal møte opp og viktig info"} icon={<ChurchIcon/>}/>
                <InfomationComponent title={"Middag"} time={"Skåtøy Kafe klokken 17:00"} description={"Her kommer det en litt lengre tekst om hvor man skal møte opp og viktig info"} icon={<PartyIcon/>}/>
            </StyledTop>
        </Wrapper>

    );
}

