import React from "react";
import { Form, FormControl } from "react-bootstrap";

export const Search = (props) => (
  <Form
    inline
    style={{ marginBottom: 25, marginTop: 15 }}
    onChange={props.onSearch}
  >
    <FormControl type="text" placeholder="Бараа хайх" className="mr-sm-2" />
  </Form>
);
