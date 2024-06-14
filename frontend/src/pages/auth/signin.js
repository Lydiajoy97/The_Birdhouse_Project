import React, { useContext, useState } from "react";
import axios from "axios"

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import { SetCurrentUserContext } from "../../App"

/* From Code Insitute walkthrough */

function SignInForm() {
  const setCurrentUser = useContext(SetCurrentUserContext);

  const [signInData, setSignInData] = useState({
    username: "",
    password1: "",
  });
  const { username, password1 } = signInData;

  const [ errors, setErrors ] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user)
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Form>
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
            {errors.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>))}
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
                  {errors.password1?.map((message, idx) => (
                    <Alert key={idx} variant="warning">
                      {message}
                    </Alert>))}
                  <Button type="submit" onChange={handleSubmit}> Sign In! </Button>
                {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>))}
    </Form>
  );
}

export default SignInForm;

