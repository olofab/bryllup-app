import React from 'react';
import './App.css';
import styled from 'styled-components';
import {ReactComponent as Letter} from "./icons/rsvp.svg";
import styles from './styles'
import {TitleWithUnderline} from "./Components/Title";
import {Input, InputGroup, InputLeftAddon} from '@chakra-ui/input';
import { Radio, RadioGroup } from "@chakra-ui/radio"
import { Stack } from '@chakra-ui/layout';
import { Button } from "@chakra-ui/button"



const StyledArticle = styled.article`
    padding: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;
    background-color: ${styles.main.colors.background.lightBlue};
`;

const LetterIcon = styled(Letter)`
    height: 60px;
    width: 60px;
        margin: auto;

`;

const StyledInput = styled(Input)`
      width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  
  &:focus{
      border: 3px solid ${styles.main.colors.background.hover};
  }
  
`;

function Form() {
    const [value, setValue] = React.useState('1')
    return (
        <RowCenter>
            <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row'>
                    <Radio colorScheme='orange' value='1'>Jeg kommer</Radio>
                    <Radio colorScheme='orange' value='0'>Jeg kommer ikke</Radio>
                </Stack>
            </RadioGroup>
        </RowCenter>
    )
}

const RowCenter = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   
    @media(max-width: 800px) {
       display: flex;
       flex-direction: column;
    }
`;
export default function RSVP() {
    return (
        <StyledArticle>
            <LetterIcon/>
            <TitleWithUnderline  title={"Registrering"}/>
            <p>For å få oversikt over hvem som kommer ønsker vi å høre fra deg før 1. april 2023</p>

            <Form/>
            <RowCenter>
            <StyledInput borderLeftRadius="0" placeholder="Navn" />
            <StyledInput borderLeftRadius="0" placeholder="Telefonnummer" />
            </RowCenter>
            <StyledInput borderLeftRadius="0" placeholder="Allergier" />
            <Button>Send inn</Button>
        </StyledArticle>

    );
}