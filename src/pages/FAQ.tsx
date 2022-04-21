import React from 'react';
import '../App.css';
import styled from 'styled-components';
import styles from '../styling/styles';
import {TitleWithUnderline} from "../components/Title";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
} from '@chakra-ui/react'

const StyledArticle = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;
    background-color: ${styles.main.colors.background.fluffyWhite};
        min-height: 60vh;

`;

const Questions = styled.div`
width: 100%;
padding 2rem;
`;

export default function FAQ() {
    return (
        <StyledArticle>
            <TitleWithUnderline  title={"Frequently asked question"}/>
            <Questions>
            <Accordion allowMultiple>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Hva er dresscode for de forskjellige dagene?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Kan man ha med barn?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
            </Questions>

        </StyledArticle>

    );
}