import React, { useState } from "react";
import axios from "axios"

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

/* From Code Insitute walkthrough */

function SignInForm() {
  const [signInData, setSignInData] = useState({
    username: "",
    password1: "",
  });
  const { username, password1 } = signInData;

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/login/", signInData);
      history.push("/bird-spot");
    } catch (err) {
    }
  };
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };
  return ( <Form>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name ="username" 
                        rows={1} 
                        value={username} 
                        onChange={handleChange} 
                    /> 
                </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="password1" name="password1">
                          <Form.Label column sm="2"> Password </Form.Label>
                          <Col sm="10">
                            <Form.Control 
                              type="password" 
                              placeholder="password"
                              name="password1"
                              value={password1} 
                              onChange={handleChange} 
                            />
                          </Col>
                        </Form.Group>
                        <Button type="submit"> Sign In! </Button>

                    </Form>
    );
}

export default SignInForm;

