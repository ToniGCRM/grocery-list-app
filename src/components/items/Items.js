import React from 'react';
import { Button, Table, } from "semantic-ui-react";
import CheckboxToggle from '../checkbox'


const Items = ({ id, itemName, itemPrice, remove }) => (

  <Table.Row>
    <Table.Cell>{itemName}</Table.Cell>
    <Table.Cell>${itemPrice}</Table.Cell>
    <Table.Cell><CheckboxToggle /></Table.Cell>
    <Table.Cell>
      <Button size="small" color="pink" onClick={() => remove(id)}>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row>
);

export default Items;