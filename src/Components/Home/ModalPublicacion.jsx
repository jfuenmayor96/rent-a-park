import React, { useState } from "react";
import {
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  ModalFooter,
  Button,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default function ModalPublicacion(props) {
  const [publicacion_lista, enviarPublicacion] = useState(false);
  return (
    <Modal
      isOpen={props.isOpen}
      toggle={() => {
        enviarPublicacion(false);
        props.toggleModal();
      }}
    >
      <ModalHeader
        toggle={() => {
          enviarPublicacion(false);
          props.toggleModal();
        }}
      >
        Publicar un nuevo puesto
      </ModalHeader>
      {!publicacion_lista ? (
        <>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Nombre del propietario</Label>
                <br />
                <Input />
              </FormGroup>

              <FormGroup>
                <Label>Número de teléfono</Label>
                <br />
                <Input />
              </FormGroup>

              <FormGroup>
                <Label>Dirección del puesto</Label>
                <br />
                <Input />
              </FormGroup>

              <FormGroup>
                <Label>Método de pago </Label>
                <br />
                <Input />
              </FormGroup>

              <FormGroup>
                <Label>Costo por día</Label>
                <br />
                <Input />
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Col xs={12} sm={12} md={12} lg={12} className="text-center">
              <Button color="primary" onClick={() => enviarPublicacion(true)}>
                Enviar
              </Button>
            </Col>
          </ModalFooter>
        </>
      ) : (
        <>
          <ModalBody>
            <Col xs={12} sm={12} md={12} lg={12} className="text-center">
              <h3>¡Publicación enviada con éxito!</h3>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Col xs={12} sm={12} md={12} lg={12} className="text-center">
              <Button
                color="primary"
                onClick={() => {
                  enviarPublicacion(false);
                  props.toggleModal();
                }}
              >
                Cerrar
              </Button>
            </Col>
          </ModalFooter>
        </>
      )}
    </Modal>
  );
}
