import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Ticket = item => {
  return (
    <div className="tickets">
      {/* estoy usando cards de react-bootstrap para los estilos, además, estoy
			llamando ItemCount como parte de su cuerpo, teniendo como parte del
			mismo div los botones de subida y bajada. */}

      <Card bg="secondary" text="light" style={{ width: "18rem" }}>
        <Card.Text>
          <br />
          <span>
            <b>Solicita:</b> {item.user}
          </span>
          <br />
          <span>
            <b>Fecha:</b> {item.date}
          </span>
          <br />
          <span>
            <b> Estado:</b> {item.state}
          </span>
        </Card.Text>
        <Card.Body>
          <Button variant="dark">
            <Link className="letraLink" to={`/detail/${item.id}`}>
              ¡Solicitar!
            </Link>
          </Button>
        </Card.Body>
      </Card>

      <br />
    </div>
  );
};

export default Ticket;
