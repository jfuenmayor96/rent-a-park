import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Listado from "./Components/Listado/Listado";
import DetallePublicacion from "./Components/DetallePublicacion/DetallePublicacion";

function App() {
  return (
    <Router>
      <Route path="/detalle-publicacion/:id" component={DetallePublicacion} />
      <Route path="/listado" component={Listado} />
      <Route path="/home" component={Home} />
    </Router>
  );
}

export default App;
