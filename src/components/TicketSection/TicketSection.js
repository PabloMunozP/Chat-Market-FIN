import { TicketContainer, Ticket, Heading, Button, TextContainer, DateText, UsernameText } from "./TicketSectionElements";
import productServices from "../../services/productServices";

export const TicketSection = ({items}) => {
    return items.map((item) => (
      <>
               <Ticket>
                <TextContainer>
                     <DateText>{item.date} </DateText>
                    <UsernameText>{item.user}</UsernameText>
                 </TextContainer>
                  <Button to={{pathname: `/detail/${item.id}`}} >Ofertar</Button>
              </Ticket>
              </>
    ))             
       }