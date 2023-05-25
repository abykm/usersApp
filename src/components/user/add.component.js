import React from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import Menubar from '../header/menubar.component';

export default function Adduser() {
  return (
    <p>
      <Menubar />
      <div className="App">
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>
            <h2>Add Users</h2>
            <Form className="form">
              <FormGroup>
                <Label for="exampleEmail">Username : </Label>
                <Input
                  type="text"
                  name="uname"
                  id="exampleEmail"
                  placeholder="user name"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Place : </Label>
                <Input
                  type="text"
                  name="place"
                  id="examplePassword"
                  placeholder="place"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button color="success" href="/123">
                Add
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </p>
  );
}
