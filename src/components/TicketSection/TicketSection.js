import { TicketContainer, Ticket, Heading, Button, TextContainer, DateText, UsernameText } from "./TicketSectionElements";
import productServices from "../../services/productServices";

export const TicketSection = () => {
    return <TicketContainer>
              <Heading>Tickets </Heading>
               <Ticket>
                <TextContainer>
                     <DateText>Fecha </DateText>
                    <UsernameText>Usuario</UsernameText>
                 </TextContainer>
                  <Button>Ofertar</Button>
              </Ticket> 
              <Ticket>
                <TextContainer>
                     <DateText>Fecha </DateText>
                    <UsernameText>Usuario</UsernameText>
                 </TextContainer>
                  <Button>Ofertar</Button>
              </Ticket> 
              <Ticket>
                <TextContainer>
                     <DateText>Fecha </DateText>
                    <UsernameText>Usuario</UsernameText>
                 </TextContainer>
                  <Button>Ofertar</Button>
              </Ticket> 
              
        </TicketContainer>}