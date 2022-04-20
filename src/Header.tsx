import React from 'react';
import './App.css';
import styled from 'styled-components';


const StyledTop = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 2rem;
    height: 100px;
    position: sticky;
    top: 0;
    background-color: white;
    align-items: center;
`;

function daysUntilWedding(){
    const weddingDate = new Date("06/24/2023");
    const today = new Date();
    return Math.floor((weddingDate.getTime()-today.getTime())/(1000*60*60*24));
}

export default function Header() {
    return (
        <StyledTop>
                <div>
                Anne Karoline + Philip
                </div>
            <div>
                {daysUntilWedding()} dager
            </div>
        </StyledTop>
    );
}

