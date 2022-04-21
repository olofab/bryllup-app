import React from 'react';
import '../App.css';
import styled from 'styled-components';
import {daysUntilWedding} from "../utils/utils";
import { TextField } from '../components/basic-components';


const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem 1rem 2rem;
    font-family: 'Gilda Display', serif;
    font-size: 2rem;
    text-transform: uppercase;
    height: 100px;
    position: sticky;
    top: 0;
    background-color: white;
    align-items: center;
`;

export default function Header() {
    const countdown = `${daysUntilWedding()} dager`;
    return (
        <StyledHeader>
                <TextField>
                Anne Karoline + Philip
                </TextField>
            <TextField>
                {countdown}
            </TextField>
        </StyledHeader>
    );
}

