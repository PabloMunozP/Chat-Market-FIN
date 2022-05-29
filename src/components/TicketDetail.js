import React from "react";
import { Card } from "react-bootstrap";

const TicketDetail = item => {
  return (
    <div className="ticketDetail">
      <Card bg="secondary" text="light" style={{ width: "18rem" }}>
        <Card.Text>
          <br />
          <h3>Solicita: </h3>
          <span>{item.items.user}</span>
          <br />
          <span>
            <h3>Fecha que solicita cambiar:</h3>
            <span>{item.items.date}</span>
          </span>
        </Card.Text>
      </Card>
    </div>
  );
};

export default TicketDetail;
