import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function Example() {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <Button
        variant="dark"
        onClick={() => setSmShow(true)}
        style={{ height: "2.5rem", marginTop: "1.5rem", marginLeft: "3rem" }}
      >
        <Icon.Cart className="mr-2 mb-1" />
        Cагс
      </Button>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Таны сагс</Modal.Title>
        </Modal.Header>
        <Modal.Body>.....</Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
