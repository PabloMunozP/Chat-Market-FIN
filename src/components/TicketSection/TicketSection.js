import { TicketContainer, Ticket, Heading, Button, TextContainer, DateText, UsernameText } from "./TicketSectionElements";
import productServices from "../../services/productServices";

export const TicketSection = ({items}) => {
    return items.map((item) => (
      <>
               <Ticket>
                <TextContainer>
                     <DateText>{item.date} </DateText>
                    <UsernameText>{item.name}</UsernameText>
                 </TextContainer>
                  <Button to={`/detail/${item.id}`}>Ofertar</Button>
              </Ticket>
              </>
    ))             
       }