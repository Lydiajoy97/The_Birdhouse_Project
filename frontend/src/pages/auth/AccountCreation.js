import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/AccountCreation.module.css";
import appStyles from "../../App.module.css";
import { Form, Col, Row, Container, Button, Alert, Image } from "react-bootstrap";
import axios from "axios";

/* From bootstrap and code insitute walkthrough */

const AccountCreation = () => {
  const [signingInFormData, setSignUpData] = useState({
    username: "",
    emailaddress: "",
    password1: "",
    password2: "",
  });
  const { username, emailaddress, password1, password2 } = signingInFormData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signingInFormData, 
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(signingInFormData)
      await axios.post("dj-rest-auth/registration/", signingInFormData)
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
    console.log()
  };

  return (
    <Row className={styles.Row}> 
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Create an account to show off your bird spots! </h1>
                    <Form onSubmit={handleSubmit} className="bird-background">
                      <Form.Group className="mb-3" controlId="emailaddress">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="emailaddress" 
                          placeholder="name@example.com" 
                          value ={emailaddress} 
                          onChange={handleChange} 
                        />
                      </Form.Group>
                      {errors.emailaddress?.map((message, idx) => 
                          <Alert varient="warning" key={idx}>{message}</Alert>
                      )}
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
                      {errors.username?.map((message, idx) => 
                          <Alert varient="warning" key={idx}>{message}</Alert>
                      )}
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
                        {errors.password1?.map((message, idx) => 
                          <Alert varient="warning" key={idx}>{message}</Alert>
                      )}
                      <Form.Group as={Row} className="mb-3" controlId="password2">
                        <Form.Label column sm="2">
                        Confirm Password
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control 
                            type="password" 
                            placeholder="Confirm Password"
                            name="password2"
                            value={password2} 
                            onChange={handleChange}
                          /> 
                        </Col>
                      </Form.Group>
                      {errors.password2?.map((message, idx) => 
                          <Alert varient="warning" key={idx}>{message}</Alert>
                      )}
                      <Button type="submit"> Create Account </Button>
                      {errors.nonfield_errors?.map((message, idx) => (
                        <Alert key={idx} variant= "warning" className="mt-3">
                          {message}
                        </Alert>
                      ))} 
                    </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        </Col>
    </Row>
  );
};

export default AccountCreation;