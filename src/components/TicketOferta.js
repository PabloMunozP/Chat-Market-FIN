import React from "react";
import { Card } from "react-bootstrap";

const TicketOferta = ({ data }) => {
  return (
    <div className="ticketDetail">
      <Card bg="secondary" text="light" style={{ width: "18rem" }}>
        <Card.Text>
          <br />
          <h3>Ofrece: </h3>
          <span>{data.user}</span>
          <br />
          <span>
            <h3>Fecha que ofrece a cambio: </h3>
            <span>{data.date}</span>
          </span>
        </Card.Text>
      </Card>
    </div>
  );
};

export default TicketOferta;
