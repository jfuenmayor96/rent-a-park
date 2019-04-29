import React from "react";
import "./Home.scss";
import { Container, Row, Col, Button, Jumbotron } from "reactstrap";
import car_image from "./../../assets/img/undraw_fast_car_p4cu.svg";

export default function Home() {
  return (
    <Container fluid className="contenedor-home">
      <Jumbotron fluid>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
          <h1>Rent-A-Park</h1>
        </Col>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="text-center">
            <h2>¿Puestos de estacionamiento? ¡Nosotros te ayudamos con eso!</h2>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="text-center">
            <img
              src={car_image}
              alt="Imagen de un carro"
              className="imagen1-home"
            />
          </Col>
        </Row>

        <Row className="botones">
          <Col xs={12} sm={12} md={6} lg={6} className="text-center">
            <Button lg="lg" color="primary" className="boton-publicar">
              <h3>Tengo un puesto</h3>
            </Button>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} className="text-center">
            <Button lg="lg" color="success" className="boton-buscar">
              <h3>Necesito un puesto</h3>
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}
