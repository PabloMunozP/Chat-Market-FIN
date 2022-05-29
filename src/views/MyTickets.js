import React from "react";
import { MainContainer } from "../components/MainContainer";
import { MyTicketSection } from "../components/MyTicketsSection/MyTicketSection";
import {Sidebar} from "../components/Sidebar/Sidebar";
import { TicketContainer, Heading } from "../components/MyTicketsSection/MyTicketSectionElements"
import {Wrapper} from "../components/Wrapper";

function MyTickets() {
  const dumbData = [{date:"22/01"},{date:"26/05"}]
  return (
    // <div>
    //   </div>main className="listaProductos"></main>
    //   <footer>
    //     <FooterPage></FooterPage>
    //   </footer>
    // </div>

    <Wrapper>
      <MainContainer>
        <Sidebar />
        <TicketContainer>
          <Heading>Tickets </Heading>
        <MyTicketSection items={dumbData} />
        </TicketContainer>
      </MainContainer>
    </Wrapper>
  );
}

export default MyTickets;