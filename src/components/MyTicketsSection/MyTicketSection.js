import { TicketContainer, Ticket, Heading, Button, TextContainer, DateText, UsernameText } from "./MyTicketSectionElements";
import productServices from "../../services/productServices";

export const MyTicketSection = ({items}) => {
    return <TicketContainer>
              <Heading>Tickets </Heading>
               <Ticket>
                <TextContainer>
                     <DateText>29/05/2022</DateText>
                 </TextContainer>
                  <Button>Ver N ofertas de cambio</Button>
              </Ticket> 
              <Ticket>
                <TextContainer>
                     <DateText>29/05/2022</DateText>
                 </TextContainer>
                  <Button>Ver N ofertas de cambio</Button>
              </Ticket>
              <Ticket>
                <TextContainer>
                     <DateText>29/05/2022</DateText>
                 </TextContainer>
                  <Button>Ver N ofertas de cambio</Button>
              </Ticket>
              
        </TicketContainer>}