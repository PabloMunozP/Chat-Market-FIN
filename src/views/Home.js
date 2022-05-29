
import FooterPage from "../components/FooterPage";
import { MainContainer } from "../components/MainContainer";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {TicketSection} from "../components/TicketSection/TicketSection"
import { Heading, TicketContainer } from "../components/TicketSection/TicketSectionElements";
import React, { useState, useEffect } from "react";
import {Wrapper} from "../components/Wrapper";
import productServices from "../services/productServices";
function Home() {
  const dumbData = [{date:"19:30",name:"pablo"},{date:"21:30",name:"isa"},{date:"15:30",name:"munon"}]
  const [arrayItems, setarrayItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productServices().then(res => {
      setarrayItems(res);
      setIsLoading(false);
    });
  });
  
  
  

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
        <TicketSection items={arrayItems} />
        </TicketContainer>
      </MainContainer>
    </Wrapper>
  );
}

export default Home;
