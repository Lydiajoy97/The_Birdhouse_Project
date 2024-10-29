/* From Code Insitutes Moments walkthrough */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/CreateEditPosts.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

// Code Institutes moments walkthrough
function CreateProfile() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    display_name:"",
    about_me:"",
    favorite_bird: "",
  });
  const { display_name, about_me, favorite_bird } = postData;

  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

      formData.append('display_name', display_name);
      formData.append('about_me', about_me);
      formData.append('favorite_bird', favorite_bird);
  
      try {
        const { data } =await axiosReq.post('/profiles', formData);
         history.push(`/profiles/${data.id}`);
        } catch(err){ 
          if (err.response?.status !== 401) {
           setErrors(err.response?.data)
        }
      }
  }

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Display Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Write the name you wish to display here" 
          name="display_name"
          value={display_name}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
            <Form.Group>
        <Form.Label>Tell us about yourself</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="about you" 
          name="about_me"
          value={about_me}
          onChange={handleChange}
        />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>What is your favorite bird?</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={4} 
          name="favorite_bird"
          value={favorite_bird}
          onChange={handleChange}/>
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={`${btnStyles.Button}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={5} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default CreateProfile;