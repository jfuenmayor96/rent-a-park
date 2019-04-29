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

export default function ModalPublicacion(props) {
  return (
    <Modal isOpen={props.isOpen} toggle={() => props.toggleModal()}>
      <ModalHeader toggle={() => props.toggleModal()}>
        Publicar un nuevo puesto
      </ModalHeader>
    </Modal>
  );
}
