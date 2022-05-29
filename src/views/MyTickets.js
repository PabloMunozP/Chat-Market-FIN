import React from "react";
import FooterPage from "../components/FooterPage";
import { MainContainer } from "../components/MainContainer";
import { MyTicketSection } from "../components/MyTicketsSection/MyTicketSection";
import PostSection from "../components/PostSection/PostSection";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {TicketSection} from "../components/TicketSection/TicketSection"
import {Wrapper} from "../components/Wrapper";

function MyTickets({items}) {

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
        <MyTicketSection />
      </MainContainer>
    </Wrapper>
  );
}

export default MyTickets;