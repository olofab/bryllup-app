import React, {ReactComponentElement} from 'react';
import './App.css';
import styled from 'styled-components';
import {ReactComponent as Mann} from "./icons/mann.svg";
import {ReactComponent as Dame} from "./icons/dame2.svg";
import {ReactComponent as Person} from "./icons/person.svg";
import styles from "./styles";
import {TitleWithUnderline} from "./Components/Title";


const StyledArticle = styled.article`
    display: block;
    padding: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;
    background-color: ${styles.main.colors.background.olive};
`;

const RowCenter = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   
    @media(max-width: 800px) {
       display: flex;
       flex-direction: column;
    }
`;

const Card = styled.div`
   padding: 1rem;
`;


const MannIcon = styled(Mann)`
    margin: auto;
    height: 60px;
    width: 60px;
`;
const DameIcon = styled(Dame)`
    margin: auto;
    height: 60px;
    width: 60px;
`;
const PersonIcon = styled(Person)`
    margin: auto;
    height: 60px;
    width: 60px;
`;

interface PersonCardProps {
    name: string;
    icon: ReactComponentElement<any>;
    description?: string;
}
function PersonCard (props: PersonCardProps){
    return(
        <Card>
            {props.icon}
            <p>{props.name}</p>
            <p>{props.description}</p>
        </Card>
    );

}

export default function TheWedding() {
    return (
        <StyledArticle>
            <TitleWithUnderline  title={"Bryllupet"}/>
            <RowCenter>
                <PersonCard name={"Philip"} icon={<MannIcon/>}/>
                <PersonCard name={"Anne Karoline"} icon={<DameIcon/>}/>
            </RowCenter>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <RowCenter>
                <PersonCard name={"Morten"} icon={<PersonIcon/>} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
                <PersonCard name={"Forlover"} icon={<PersonIcon/>} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
                <PersonCard name={"Forlover"} icon={<PersonIcon/>} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
            </RowCenter>
        </StyledArticle>

    );
}