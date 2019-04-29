import React, { setState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardLink,
  CardText,
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";
import { withRouter } from "react-router-dom";
import "./DetallePublicacion.scss";
import nombre from '../../assets/img/user.png';
import precio from '../../assets/img/coins.png';
import direccion from '../../assets/img/address.png';
import ubicacion from '../../assets/img/sign-post.png';
import metodo_pago from '../../assets/img/money.png';
import mapa from '../../assets/img/mapa.PNG';
import reputacion from '../../assets/img/rate.PNG';

const publicaciones = [
  {
    id: 1,
    ubicacion: "El Hatillo",
    precio: "2000bs",
    nombre_propietario: "Juan Perez",
    metodo_pago: "Transferencia",
    direccion: "Calle El Pauji, Local 201"
  },
  {
    id: 2,
    ubicacion: "Los Palos Grandes",
    precio: "2500bs",
    nombre_propietario: "Juan Perez",
    metodo_pago: "transferencia",
    direccion: "Calle El Pauji, Local 201"
  },
  {
    id: 3,
    ubicacion: "Oripoto",
    precio: "1500bs",
    nombre_propietario: "Juan Perez",
    metodo_pago: "transferencia",
    direccion: "Calle El Pauji, Local 201"
  },
  {
    id: 4,
    ubicacion: "El Cafetal",
    precio: "1900bs",
    nombre_propietario: "Juan Perez",
    metodo_pago: "transferencia",
    direccion: "Calle El Pauji, Local 201"
  }
];

function DetallePublicacion(props) {
  let publicacion = publicaciones.filter(
    _p => _p.id === parseInt(props.match.params.id, 10)
  )[0];

  if (publicacion) {
    return (
      <Container className="contenedor-detalle-publicacion">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
          <h1>Detalle de Publicación</h1>
        </Col>
      </Row>
      <Row>       
        <Col xs={6} sm={6} md={6} lg={6}>
          <ListGroup className="detalle">
            <ListGroupItem>            
              <img src={nombre} className="icono"/>  
              <strong>Nombre del Propietario:</strong> {publicacion.nombre_propietario}
            </ListGroupItem>
            <ListGroupItem>
              <img src={ubicacion} className="icono"/>
              <strong>Ubicación:</strong> {publicacion.ubicacion}</ListGroupItem>
            <ListGroupItem>
              <img src={direccion} className="icono"/>
              <strong>Dirección:</strong> {publicacion.direccion}
              <a href="https://www.google.com/maps/place/Av.+Principal+de+El+Hatillo,+Caracas,+Miranda/@10.4315513,-66.8501081,17z/data=!3m1!4b1!4m5!3m4!1s0x8c2af636b8d5f52b:0xe0c6017bc8cec46c!8m2!3d10.4315513!4d-66.8479194">
                <img src={mapa} className="mapa"/>
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <img src={precio} className="icono"/>
              <strong>Precio:</strong> {publicacion.precio}</ListGroupItem>
            <ListGroupItem>
              <img src={metodo_pago} className="icono"/>            
              <strong>Método de Pago:</strong> {publicacion.metodo_pago}</ListGroupItem>                   
          </ListGroup>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}></Col>            
        <Col xs={3} sm={3} md={3} lg={3} className="text-center">            
          <Card outline color="primary">
            <CardHeader>
              <CardLink  href="#"><strong>{publicacion.nombre_propietario}</strong></CardLink>
            </CardHeader>
              <CardBody>
                <CardText>
                  <strong>Reputación</strong>                  
                </CardText>
                <img src={reputacion} className="rate"/> 
                <CardText className="rate-card">
                  Este usuario tiene buena reputación en el sitio                
                </CardText>   
                <CardLink  href="#" className="rate-card">Ver opiniones de {publicacion.nombre_propietario} </CardLink>
              </CardBody>
          </Card>
        </Col>         
      </Row>   
      <Col xs={6} sm={6} md={6} lg={6} className="text-center">
        <Button outline color="primary" size="lg" className="boton-contactar">
          Contactar
        </Button>
      </Col>   
    </Container>      
    );
  } else {
    return <div>Publicación inválida</div>;
  }
}

export default withRouter(DetallePublicacion);
