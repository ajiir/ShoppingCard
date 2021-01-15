import React from "react";
import { Kart } from "../card";
import { Container, Row } from "react-bootstrap";

export const CardList = (props) => (
  <div>
    <Container fluid>
      <Row className="justify-content-md-center">
        {props.products.map((el) => (
          <Kart key={el.ean} product={el} />
        ))}
      </Row>
    </Container>
  </div>
);
