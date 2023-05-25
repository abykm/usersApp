import React, { useState } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Button } from 'reactstrap';
import Menubar from '../header/menubar.component';

export default function Listuser() {
  const [username, setUsername] = useState([
    { username: 'Aby', place: 'bathery', status: 'pending' },
    { username: 'Anila', place: 'bathery', status: 'published' },
    { username: 'Alicia', place: 'bathery', status: 'pending' },
    { username: 'Anil', place: 'bathery', status: 'published' },
    { username: 'Mathai', place: 'bathery', status: 'pending' },
  ]);

  function selectUname(e) {
    console.log(e);
  }
  return (
    <div>
      <Menubar />
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}>
          <h3>List Users </h3>
          <ListGroup>
            {username.map((item, i) => {
              return (
                <ListGroupItem
                  key={i}
                  onClick={() => selectUname(item)}
                  tag="a"
                  action
                >
                  {item.username}
                </ListGroupItem>
              );
            })}
          </ListGroup>
          <br />
          <Button color="danger">Remove All</Button>
        </Col>
      </Row>
    </div>
  );
}
