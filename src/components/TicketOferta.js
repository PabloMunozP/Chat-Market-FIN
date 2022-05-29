import React from "react";
import { Card } from "react-bootstrap";

const TicketOferta = item => {
  return (
    <div className="ticketOferta">
      <Card bg="secondary" text="light" style={{ width: "18rem" }}>
        <Card.Text>
          <br />
          <h3>Ofrece: </h3>
          <span>{item.items.user}</span>
          <br />
          <span>
            <h3>Fecha que ofrece cambiar:</h3>
            <span>{item.items.date_cambio}</span>
          </span>
        </Card.Text>
      </Card>
    </div>
  );
};

export default TicketOferta;
