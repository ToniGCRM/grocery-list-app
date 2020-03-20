import React from 'react';
import { Button, Table, } from "semantic-ui-react";

const Items = ({ id, itemName, itemPrice, bought }) => (

  <Table.Row>
    <Table.Cell>{itemName}</Table.Cell>
    <Table.Cell>${itemPrice}</Table.Cell>
    <Table.Cell>{bought}</Table.Cell>
    <Table.Cell>
      <button color="red">
        Delete
      </button>
    </Table.Cell>
  </Table.Row>
);

export default Items;