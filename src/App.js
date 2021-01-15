import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { CardList } from "./components/card-list";
import { Search } from "./components/search";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Product from "./components/product";
import Example from "./components/mycart";

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://fakerapi.it/api/v1/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data.data }));
  }

  onSearchChanged = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { products, searchField } = this.state;

    const filteredProducts = products.filter((el) =>
      el.name.toLowerCase().includes(searchField)
    );

    return (
      <BrowserRouter>
        <div>
          <Container fluid>
            <Switch>
              <Route path="/product/:ean" component={Product} />
              <Route path="/">
                <Row className="justify-content-md-center">
                  <h1
                    className="text-secondary"
                    style={{
                      fontSize: "75px",
                      fontWeight: "bold",
                      marginRight: "3rem",
                    }}
                  >
                    ШИНЭ БАРАА
                  </h1>

                  <Search onSearch={this.onSearchChanged} />

                  <Example />
                </Row>

                <Row className="justify-content-md-center">
                  <CardList products={filteredProducts} />
                </Row>
              </Route>
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
