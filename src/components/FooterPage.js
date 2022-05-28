import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">TeLoCambio para Fintual</h5>
            <p>¡Nunca más pierdas un cambio de hora!</p>
            <p>
              Obispo Pérez de Espinoza 224, Santiago de Chile.
              <br />
              <strong>Teléfono:</strong> +56 2 13245678
              <br />
              <strong>Email:</strong> fin@fintual.com
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Sociales</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Otros</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://github.com/PabloMunozP/Chat-Market-FIN">
            Team Dinamarca
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
