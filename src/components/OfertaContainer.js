import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ofertaServices from "../services/ofertaServices";
import LoadingSpinner from "./LoadingSpinner";
import TicketOferta from "./TicketOferta";

const OfertaContainer = () => {
  let id = useParams();
  let userID = parseInt(id.id);

  const [arrayItems, setarrayItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ofertaServices(userID).then(res => {
      setarrayItems(res);
      setIsLoading(false);
      console.log(res);
    });
  }, [userID]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <div className="ofertasContainer">
            <TicketOferta items={arrayItems}></TicketOferta>
          </div>
        </>
      )}
    </div>
  );
};

export default OfertaContainer;
