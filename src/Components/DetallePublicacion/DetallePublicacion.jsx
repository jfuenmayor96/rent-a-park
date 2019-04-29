import React, { setState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./DetallePublicacion.scss";

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

function DetallePublicacion(props) {
  let publicacion = publicaciones.filter(
    _p => _p.id === parseInt(props.match.params.id, 10)
  )[0];

  if (publicacion) {
    return <div>Informacion</div>;
  } else {
    return <div>Publicación inválida</div>;
  }
}

export default withRouter(DetallePublicacion);
