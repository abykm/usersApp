import React from 'react';
import Menubar from '../header/menubar.component';
import { useLocation } from 'react-router-dom';
import { FormGroup, Form, Label, Input, Row, Col, Button } from 'reactstrap';

export default function Edituser() {
  const location = useLocation();
  return (
    <div>
      <Menubar />
      <div className="App">
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>
            <h2>Edit Users</h2>
            <Form className="form">
              <FormGroup>
                <Label for="exampleEmail">Username : </Label>
                <Input
                  type="text"
                  name="uname"
                  id="exampleEmail"
                  value={location.state.username}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Place : </Label>
                <Input
                  type="text"
                  name="place"
                  id="examplePassword"
                  value={location.state.place}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Label> Status : {location.state.status} </Label>
              <br />
              <Button color="success">
                {location.state.status === 'pending' ? 'Publish' : 'UnPublish'}
              </Button>{' '}
              <Button color="danger" onClick={() => deleteUser()}>
                Delete
              </Button>{' '}
              <Button color="primary">Update</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
