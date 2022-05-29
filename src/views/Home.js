import React from "react";
import FooterPage from "../components/FooterPage";
import TicketListContainer from "../components/TicketListContainer";

function Home() {
  return (
    <div>
      <main className="listaTickets">
        <TicketListContainer></TicketListContainer>
      </main>
      <footer>
        <FooterPage></FooterPage>
      </footer>
    </div>
  );
}

export default Home;
