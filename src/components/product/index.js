import React, { Component } from "react";
import { Card, Container, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Example from "../mycart";

class Product extends Component {
  state = {
    product: null,
  };

  componentDidMount = () => {
    fetch(
      "https://fakerapi.it/api/v1/products?_quantity=1&_ean=" +
        this.props.match.params.ean
    )
      .then((response) => response.json())
      .then((data) => this.setState({ product: data.data[0] }));
  };

  render() {
    return (
      <div>
        {this.state.product ? (
          <div>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 10,
                fontWeight: "bold",
              }}
              className="text-secondary"
            >
              ДЭЛГЭРЭНГҮЙ
              <Example />
            </h1>

            <Container>
              <Row className="justify-content-md-center">
                <Card bg="light" className="mb-3" style={{ width: "50vw" }}>
                  <Card.Body>
                    <Card.Img src={`http://placeimg.com/640/480/tech`} alt="" />
                    <Card.Title>{this.state.product.name}</Card.Title>
                    <Card.Text>{this.state.product.description}</Card.Text>
                    <Card.Text>Үнэ: {this.state.product.price}$</Card.Text>
                  </Card.Body>
                  <Button variant="primary" block style={{ marginBottom: 10 }}>
                    Сагсанд нэмэх
                  </Button>
                  <Link to="/">
                    <Button variant="primary" block>
                      Буцах
                    </Button>
                  </Link>
                </Card>
              </Row>
            </Container>
          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: 200 }}>
            <p className="text-secondary" style={{ fontWeight: "bold" }}>
              Түр хүлээнэ үү
            </p>
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
      </div>
    );
  }
}

export default Product;
