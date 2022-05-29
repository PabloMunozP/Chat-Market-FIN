import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import TicketList from "./TicketList";
import productServices from "../services/productServices";
import LoadingSpinner from "./LoadingSpinner";

const TicketListContainer = () => {
  const [arrayItems, setarrayItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productServices().then(res => {
      setarrayItems(res);
      setIsLoading(false);
    });
  });

  return (
    <div>
      <br />
      <h3>Cambia tu hora</h3>
      <br />
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <Container>
          <div className="ticketContainer">
            <TicketList items={arrayItems}></TicketList>
          </div>
        </Container>
      )}
    </div>
  );
};

export default TicketListContainer;
