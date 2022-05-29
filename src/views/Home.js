import React from "react";
import FooterPage from "../components/FooterPage";
import { MainContainer } from "../components/MainContainer";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {TicketSection} from "../components/TicketSection/TicketSection"
import {Wrapper} from "../components/Wrapper";

function Home() {
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
        <TicketSection />
      </MainContainer>
    </Wrapper>
  );
}

export default Home;
