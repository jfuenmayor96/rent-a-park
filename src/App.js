import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Listado from "./Components/Listado/Listado";
import DetallePublicacion from "./Components/DetallePublicacion/DetallePublicacion";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detalle-publicacion/:id" component={DetallePublicacion} />
        <Route path="/listado" component={Listado} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
