import styled from "styled-components";
import {Link} from "react-router-dom"

export const Wrapper = styled.div`
    display: flex;
    width: 80%;  
    justify-content: center;
    align-items: center;
    
    
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: none;
        color: black;
    }
`



export const Heading = styled.h1`
    font-family: 'Encode Sans Expanded', sans-serif;
    font-family: 'Roboto', sans-serif;
`;


export const Container = styled.div`
`;

export const UsernameText = styled.h2`
    font-size: 18px;
    font-family: 'Encode Sans Expanded', sans-serif;
    font-family: 'Roboto', sans-serif;
`

export const DateText = styled.h2`
    font-size: 32px;
    font-family: 'Encode Sans Expanded', sans-serif;
    font-family: 'Roboto', sans-serif;
`
export const OfferForm = styled.form`
input {
    width: 100%;
}
`
export const Button = styled.div`
    background: #098aed;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    width: 100%;
`