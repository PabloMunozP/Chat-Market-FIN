import React from "react";
import { MainContainer } from "../components/MainContainer";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {Wrapper} from "../components/Wrapper";
import DetailSection from "../components/DetailSection/DetailSection"
function Detail({item}) {
  
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
        <DetailSection />
      </MainContainer>
    </Wrapper>
  );
}

export default Detail;