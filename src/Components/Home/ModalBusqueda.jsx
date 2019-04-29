import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  InputGroup,
  Input
} from "reactstrap";

export default function ModalBusqueda(props) {
  return (
    <Modal isOpen={props.isOpen} toggle={() => props.toggleModal()}>
      <ModalHeader toggle={() => props.toggleModal()}>
        Buscar un puesto
      </ModalHeader>
    </Modal>
  );
}
