import React, { Component } from 'react';
import { Form, } from "semantic-ui-react";

class ItemForm extends Component {
  state = { itemName: '', itemPrice: '', bought: false };

handleSubmit = (e) => {
  e.preventDefault();
  this.props.add(this.state);
  this.setState({ itemName: "", itemPrice: "", });
}
handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value, });
}

render() {
  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
        fluid
        label="Item Name"
        placeholder="Item Name"
        name="itemName"
        value={this.state.itemName}
        onChange={this.handleChange}
        />
        <Form.Input
        fluid
        label="Price"
        placeholder="Price $"
        name="itemPrice"
        value={this.state.itemPrice}
        onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form.Group>
    </Form>
  )
}

}
export default ItemForm;