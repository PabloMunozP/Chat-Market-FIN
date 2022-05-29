import { stepLabelClasses } from "@mui/material";
import styled from "styled-components";
import {Link} from "react-router-dom";
export const TicketContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 50px 50px;
    justify-content: space-evenly;
`;

export const Ticket = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 20%;
    background: white;
    border-radius: 10px;
`;

export const Heading = styled.h1`
    font-size: 32px;
`

export const Button = styled(Link)`
    display: flex;
    text-decoration: none;
    color: black;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 30%;
    background: #098aed;
    border-radius: 10px;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DateText = styled.div`
    font-size: 20px;
`

export const UsernameText = styled.div`
    font-size: 16px;
`
