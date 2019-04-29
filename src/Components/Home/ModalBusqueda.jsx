import React from "react";
import { withRouter } from "react-router-dom";
import {
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from "reactstrap";

function ModalBusqueda(props) {
  return (
    <Modal isOpen={props.isOpen} toggle={() => props.toggleModal()}>
      <ModalHeader toggle={() => props.toggleModal()}>
        Buscar un puesto
      </ModalHeader>
      <ModalBody>
        <Input type="select">
          <option value="hatillo">El Hatillo</option>
          <option value="mercedes">Las Mercedes</option>
          <option value="oripoto">Oripoto</option>
          <option value="cafetal">El Cafetal</option>
          <option value="palos_grandes">Los Palos Grandes</option>
        </Input>
      </ModalBody>
      <ModalFooter>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
          <Button
            color="primary"
            onClick={() => {
              props.history.push("/listado");
            }}
          >
            Buscar
          </Button>
        </Col>
      </ModalFooter>
    </Modal>
  );
}

export default withRouter(ModalBusqueda);
