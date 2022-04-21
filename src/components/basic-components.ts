import styled from "styled-components";
import styles from "../styling/styles";

export const TextField = styled.p`
   margin: 1rem;
`;

export const Name = styled.p`
   font-size: 1.2rem;
   font-weight: bold;
   margin: 1rem;
   letter-spacing: .1em;

`;

export const Underline = styled.span`
    display: block;
    width: 60px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${styles.main.colors.background.text};
   
`;

export const RowCenter = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   
    @media(max-width: 800px) {
       display: flex;
       flex-direction: column;
    }
`;