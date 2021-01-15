import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

export const Kart = (props) => (
  <Link to={"/product/" + props.product.ean} style={{ textDecoration: "none" }}>
    <Card
      bg="dark"
      text="white"
      className="mb-3"
      style={{
        width: "18rem",
        height: "35rem",
        textAlign: "justify",
        paddingBottom: 10,
      }}
    >
      <Card.Body>
        <Card.Img src={`http://placeimg.com/640/480/tech`} alt="" />
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>{props.product.description}</Card.Text>
        <Card.Text>Үнэ: {props.product.price}$</Card.Text>
      </Card.Body>
      <Card.Footer style={{ textAlign: "center" }}>
        <Button
          variant="primary"
          size="sm"
          style={{ width: 150, alignSelf: "center" }}
        >
          Дэлгэрэнгүй
          <Icon.Cart className="mr-1 ml-4 mb-1 " />
        </Button>
      </Card.Footer>
    </Card>
  </Link>
);
