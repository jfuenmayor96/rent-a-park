import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
  Button
} from "reactstrap";
import { withRouter } from "react-router-dom";
import "./Listado.scss";

const publicaciones = [
  {
    id: 1,
    ubicacion: "El Hatillo",
    precio: "2000bs"
  },
  {
    id: 2,
    ubicacion: "Los Palos Grandes",
    precio: "2500bs"
  },
  {
    id: 3,
    ubicacion: "Oripoto",
    precio: "1500bs"
  },
  {
    id: 4,
    ubicacion: "El Cafetal",
    precio: "1900bs"
  }
];

function Listado(props) {
  return (
    <Container className="contenedor-listado">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
          <h1>Listado de Publicaciones</h1>
        </Col>
      </Row>

      {publicaciones.map(publicacion => {
        return (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={`publicacion_id_${publicacion}`}
            className="contenedor-publicacion"
          >
            <Card>
              <CardHeader>{publicacion.ubicacion}</CardHeader>
              <CardBody>
                <CardText>
                  <strong>Precio</strong>: {publicacion.precio}
                </CardText>
              </CardBody>
              <CardFooter>
                <Col xs={12} sm={12} md={12} lg={12} className="text-center">
                  <Button
                    color="primary"
                    onClick={() => {
                      props.history.push(`/publicacion/${publicacion.id}`);
                    }}
                  >
                    Visitar
                  </Button>
                </Col>
              </CardFooter>
            </Card>
          </Col>
        );
      })}
    </Container>
  );
}

export default withRouter(Listado);
