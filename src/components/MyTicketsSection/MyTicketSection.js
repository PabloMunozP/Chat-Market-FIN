import { TicketContainer, Ticket, Heading, Button, TextContainer, DateText, UsernameText } from "./MyTicketSectionElements";
import productServices from "../../services/productServices";

export const MyTicketSection = ({items}) => {

    return items.map((item) => (
        <>
    
    <Ticket>
     <TextContainer>
          <DateText>{item.date}</DateText>
      </TextContainer>
       <Button>Ver N ofertas de cambio</Button>
   </Ticket>
   </> )
    )}