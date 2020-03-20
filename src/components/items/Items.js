import React from 'react';
import { Button, Table, } from "semantic-ui-react";

const Items = ({ items }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Item Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Bought</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        items.map( item => (
          <Table.Row id={item.id}>
            <Table.Cell>{item.itemName}</Table.Cell>
            <Table.Cell>${item.itemPrice}</Table.Cell>
            <Table.Cell>{item.bought}</Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>

);

export default Items;