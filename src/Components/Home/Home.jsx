import React, { useState } from "react";
import "./Home.scss";
import { Container, Row, Col, Button, Jumbotron } from "reactstrap";
import car_image from "./../../assets/img/undraw_fast_car_p4cu.svg";
import ModalPublicacion from "./ModalPublicacion";
import ModalBusqueda from "./ModalBusqueda";

export default function Home() {
  const [mostrar_modal_publicacion, mostrarModalPublicacion] = useState(false);
  const [mostrar_modal_busqueda, mostrarModalBusqueda] = useState(false);

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
            <Button
              lg="lg"
              color="primary"
              className="boton-publicar"
              onClick={() => mostrarModalPublicacion(true)}
            >
              <h3>Tengo un puesto</h3>
            </Button>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} className="text-center">
            <Button
              lg="lg"
              color="success"
              className="boton-buscar"
              onClick={() => mostrarModalBusqueda(true)}
            >
              <h3>Necesito un puesto</h3>
            </Button>
          </Col>
        </Row>
      </Jumbotron>

      <ModalPublicacion
        isOpen={mostrar_modal_publicacion}
        toggleModal={() => mostrarModalPublicacion(false)}
      />

      <ModalBusqueda
        isOpen={mostrar_modal_busqueda}
        toggleModal={() => mostrarModalBusqueda(false)}
      />
    </Container>
  );
}
