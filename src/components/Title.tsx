import React from "react";
import styled from "styled-components";
import {ReactComponent as Flower} from "../icons/flower.svg";
import styles from "../styling/styles";
import {UnderlineGold} from "./basic-components";

const Title = styled.div`
    margin: 1rem 0.5rem 1rem 0.5rem;
    font-family: 'Gilda Display', serif;
    font-size: 3rem;
    text-align: center;
        text-transform: uppercase;
    color: ${styles.main.colors.background.text};
    display: flex;
            flex-direction: column;

    align-items: center;
     @media(max-width: 800px) {
        font-size: 2.5rem;
    }
`;

const WhiteTitle = styled.div`
    margin: 1rem 0.5rem 1rem 0.5rem;
    font-family: 'Gilda Display', serif;
    font-size: 3rem;
    text-align: center;
        text-transform: uppercase;
    color: ${styles.main.colors.background.fluffyWhite};
    
     @media(max-width: 800px) {
        font-size: 2.5rem;
    }
`;

interface TitleProps {
    title: string;
}
export const FlowerLine = styled(Flower)`
margin: auto;
    height: 50px;
    width: 50px;
    transform: rotate(45deg);

`;

export function TitleWithUnderline (props: TitleProps){
    return(
        <Title>
            <div>{props.title}</div>
            <UnderlineGold/>
        </Title>
    );

}

export function WhiteTitleWithUnderline (props: TitleProps){
    return(
        <WhiteTitle>
            <div>{props.title}</div>
            <UnderlineGold/>
        </WhiteTitle>
    );

}