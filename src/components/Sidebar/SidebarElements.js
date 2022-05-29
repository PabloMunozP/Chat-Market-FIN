import styled from "styled-components";
import { Link } from "react-router-dom";

export const Bar = styled.div`
    height: 100%;
    width: 40%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 15px 0 0 15px;
    
    
`
export const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const SidebarItem = styled(Link)`
    text-decoration: none;
    color: black;                                                                                                                                                        
    &:hover {
        color: black;
        
    }
    
`
export const userContainer = styled.div`
   
`

export const userImage = styled.img`
    
`
export const UsernameText = styled.h1`
    font-size: 24px;
`
