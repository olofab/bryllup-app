import React from 'react';
import './App.css';
import styled from 'styled-components';
import {ReactComponent as Help} from "./icons/faq.svg";
import styles from './styles';
import "@fremtind/jkl-accordion/accordion.min.css";
import {TitleWithUnderline} from "./Components/Title";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
} from '@chakra-ui/react'

const StyledArticle = styled.article`
    padding: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;
    background-color: ${styles.main.colors.background.fluffyWhite};
`;

const StyledAccordionItem = styled(AccordionItem)`
    background-color: ${styles.main.colors.background.fluffyWhite};
    text-align: left;
    font-family: 'Quicksand', sans-serif;
`;

const FAQIcon = styled(Help)`
    height: 60px;
    width: 60px;
    margin: auto;
`;
export default function FAQ() {
    return (
        <StyledArticle>
            <FAQIcon/>
            <TitleWithUnderline  title={"Frequently asked question"}/>
            <Accordion>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Section 1 title
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
                            Section 2 title
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
        </StyledArticle>

    );
}