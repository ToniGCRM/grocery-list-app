import React, { Component } from 'react';
import './App.css';
import { Container, Header, } from 'semantic-ui-react';
import List from "./components/lists/List";
import ItemForm from "./components/ItemForm";

class App extends Component {

  state = {
    items: [
      {id: 1, itemName: 'Milk', itemPrice: 3.00, bought: false },
      {id: 2, itemName: 'Bread', itemPrice: 2.00, bought: true },
      {id: 3, itemName: 'Cheese', itemPrice: 4.00, bought: false },
    ],
  }

  getId = () => {
    return Math.floor((1+Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  };

  addItems = (itemsData) => {
    let items = { id:this.getId(), ...itemsData, };
    this.setState({ items: [items, ...this.state.items], });
  }

  render() {
    return (
      <Container style={{ paddingTop: "20px" }}>
        <Header as="h1">Toni's Amazing Grocery List App</Header>
        <br/>
        <ItemForm add={this.addItems} />
        <List items={this.state.items} />
      </Container>
    );
  }
}



export default App;
