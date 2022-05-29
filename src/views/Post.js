import React from "react";
import FooterPage from "../components/FooterPage";
import { MainContainer } from "../components/MainContainer";
import PostSection from "../components/PostSection/PostSection";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {TicketSection} from "../components/TicketSection/TicketSection"
import {Wrapper} from "../components/Wrapper";

function Post() {
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
        <PostSection />
      </MainContainer>
    </Wrapper>
  );
}

export default Post;