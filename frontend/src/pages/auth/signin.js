import React, { useState } from "react";
import axios from "axios"

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

/* From Code Insitute walkthrough */

function SignInForm() {
  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

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
              </Alert>
            ))}
          <Form.Group as={Row} className="mb-3" controlId="password" name="password">
            <Form.Label column sm="2"> Password </Form.Label>
              <Col sm="10">
                <Form.Control 
                  type="password" 
                  placeholder="password"
                  name="password"
                  value={password} 
                  onChange={handleChange} 
                />
                </Col>
                </Form.Group>
                  {errors.password?.map((message, idx) => (
                    <Alert key={idx} variant="warning">
                      {message}
                    </Alert>))}
                  <Button type="submit" onClick={handleSubmit}> Sign In! </Button>
                {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>))}
    </Form>
  );
}

export default SignInForm;