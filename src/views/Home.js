import React from "react";
import FooterPage from "../components/FooterPage";
import { MainContainer } from "../components/MainContainer";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {TicketSection} from "../components/TicketSection/TicketSection"
import { Heading, TicketContainer } from "../components/TicketSection/TicketSectionElements";
import {Wrapper} from "../components/Wrapper";

function Home() {
  const dumbData = [{date:"22/01",name:"pablo",id:1},{date:"26/05",name:"isa",id:2},{date:"15/05",name:"munon",id:3}]
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
          <Heading>Tickets</Heading>
        <TicketSection items={dumbData} />
        </TicketContainer>
      </MainContainer>
    </Wrapper>
  );
}

export default Home;
