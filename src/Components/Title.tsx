import React from "react";
import styled from "styled-components";
import {ReactComponent as Flower} from "../icons/flower.svg";
import styles from "../styles";

const Title = styled.div`
    margin: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 2rem;
    text-align: center;
    color: ${styles.main.colors.background.text};
`;

interface TitleProps {
    title: string;
}
export const FlowerLine = styled(Flower)`
margin: auto;
    height: 30px;
    width: 30px;
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