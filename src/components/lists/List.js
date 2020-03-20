import React from 'react';
import { Button, Table, } from "semantic-ui-react";
import Items from "../items/Items"

const List = ({ items }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Item Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Bought</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        items.map( item => (
          <Items key={item.id} {...item} />
        ))
        
      }
    </Table.Body>
  </Table>

);

export default List;