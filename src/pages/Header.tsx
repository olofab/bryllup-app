import React from 'react';
import '../App.css';
import styled from 'styled-components';
import {daysUntilWedding} from "../utils/utils";
import theme from "../styling/styles";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 1rem;
    font-family: 'Gilda Display', serif;
    font-size: 2rem;
    text-transform: uppercase;
    height: 100px;
    position: sticky;
    top: 0;
    background-color: ${theme.main.colors.background.fluffyWhite};
    align-items: center;
    
     @media(max-width: 800px) {
        font-size: 1.2rem;
    }
`;

const Countdown = styled.p`
   font-size: 2rem;
 @media(max-width: 800px) {
        font-size: 1.0rem;
    }
`;

export default function Header() {
    const countdown = `${daysUntilWedding()} dager`;
    return (
        <StyledHeader>
                <p>
                Anne Karoline & Philip
                </p>
            <Countdown>
                {countdown}
            </Countdown>
        </StyledHeader>
    );
}

