import React, { Component } from 'react';
import './App.css';
import { Container, Header, } from 'semantic-ui-react';
import Items from "./components/items/Items";

class App extends Component {

  state = {
    items: [
      {id: 1, itemName: 'Milk', itemPrice: 3.00, bought: false },
      {id: 2, itemName: 'Bread', itemPrice: 2.00, bought: true },
      {id: 3, itemName: 'Cheese', itemPrice: 4.00, bought: false },
    ],
  }

  render() {
    return (
      <Container>
        <Header as="h1">Toni's Amazing Grocery List App</Header>
        <Items items={this.state.items} />
      </Container>
    );
  }
}



export default App;
