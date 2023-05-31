import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUsers } from '../../actions/users';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import Menubar from '../header/menubar.component';

export default function Adduser() {
  const [users, setUsers] = useState({ uname: '', place: '' });
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };
  const saveUsers = () => {
    dispatch(createUsers(users))
      .then((data) => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const newUsers = () => {
    setSubmitted(false);
  };
  return (
    <div>
      <Menubar />
      {submitted ? (
        <div>
          <p>Submitted Successfully</p>
          <Button color="primary" onClick={newUsers}>
            {' '}
            New User{' '}
          </Button>
        </div>
      ) : (
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
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Place : </Label>
                  <Input
                    type="text"
                    name="place"
                    id="examplePassword"
                    placeholder="place"
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <Button color="success" onClick={saveUsers}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
