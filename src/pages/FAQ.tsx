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
import { faq } from "../content/faq";

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
            <TitleWithUnderline  title={"Ofte stilte spørsmål"}/>
            <Questions>
            <Accordion allowMultiple>
                {
                    faq.questions.map((item) => (
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        {item.question}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {item.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
        </Accordion>
            </Questions>

        </StyledArticle>

    );
}