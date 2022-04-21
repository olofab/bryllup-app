import React from "react";
import styled from "styled-components";
import {ReactComponent as Flower} from "../icons/flower.svg";
import styles from "../styling/styles";

const Title = styled.div`
    margin: 1rem;
    font-family: 'Gilda Display', serif;
    font-size: 3rem;
    text-align: center;
        text-transform: uppercase;
    color: ${styles.main.colors.background.text};
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
            <FlowerLine/>
        </Title>
    );

}