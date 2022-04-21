import React, {ReactComponentElement} from "react";
import styled from "styled-components";
import {Name, TextField} from "./basic-components";

interface PersonCardProps {
    name: string;
    icon: ReactComponentElement<any>;
    description?: string;
}

const Card = styled.div`
   padding: 1rem;
   margin-top: 0.5rem;
`;

export function PersonCard (props: PersonCardProps){
    return(
        <Card>
            {props.icon}
            <Name>{props.name}</Name>
            <TextField>{props.description}</TextField>
        </Card>
    );

}