import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import TicketDetail from "./TicketDetail";
import FooterPage from "./FooterPage";
import LoadingSpinner from "./LoadingSpinner";

import productServices from "../services/productServices";

const TicketDetailContainer = () => {
  let id = useParams();
  let userID = parseInt(id.id);

  const [arrayItems2, setarrayItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productServices(userID).then(res => {
      setarrayItems(res);
      setIsLoading(false);
    });
  }, [userID]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <div className="detailContainer">
            <TicketDetail items={arrayItems2}></TicketDetail>
          </div>
          <div className="ofertasContain"></div>
          <FooterPage></FooterPage>
        </>
      )}
    </div>
  );
};

export default TicketDetailContainer;
