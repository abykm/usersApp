import React, { useState } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  Container,
} from 'reactstrap';
import Menubar from '../header/menubar.component';
import { useNavigate } from 'react-router-dom';

export default function Listuser() {
  const [username, setUsername] = useState([
    { username: 'Aby', place: 'bathery', status: 'pending' },
    { username: 'Anila', place: 'calicut', status: 'published' },
    { username: 'Alicia', place: 'bombay', status: 'pending' },
    { username: 'Anil', place: 'bangalore', status: 'published' },
    { username: 'Mathai', place: 'goa', status: 'pending' },
  ]);
  const [singleUser, setSingleUSer] = useState(null);
  const navigate = useNavigate();

  function selectUname(item) {
    setSingleUSer(item);
  }

  function editUSer() {
    navigate('/edituser');
  }
  return (
    <div>
      <Menubar />
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>
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
        <Col sm={{ size: 'auto', offset: 1 }}>
          {singleUser && (
            <div>
              <h3> User </h3>
              <p> User name : {singleUser.username} </p>
              <p> Place : {singleUser.place} </p>
              <p> Status : {singleUser.status} </p>
              <Button
                onClick={() => navigate('/edituser', { state: singleUser })}
              >
                Edit
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}
