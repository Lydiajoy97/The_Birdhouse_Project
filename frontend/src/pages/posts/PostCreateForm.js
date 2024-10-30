/* From Code Insitutes Moments walkthrough */
import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image"

import PinkUpload from "../../assets/PinkUpload.png";

import styles from "../../styles/CreateEditPosts.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Assets";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import BirdDropdown from "../../components/BirdDropdown";

// Code Institutes moments walkthrough


function PostCreateFrom() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    name:"",
    location:"",
    content:"",
    image:"",
    title: "",
    type_of_bird: "",
  });
  const { name, location, content, image, title, type_of_bird } = postData;

  const imageInput = useRef(null)
  const history = useHistory()

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

      formData.append('name', name);
      formData.append('title', title);
      formData.append('content', content);
      formData.append('location', location);
      formData.append('type_of_bird', type_of_bird);
      formData.append('image', imageInput.current.files[0]);
  
      try {
        await axiosReq.post('/birdpost', formData);
        history.push('/approval');
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
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
            <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Post title" 
          name="title"
          value={title}
          onChange={handleChange}
        />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Tell us about the bird you spotted</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={8} 
          name="content"
          value={content}
          onChange={handleChange}/>
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Help others to find it" 
          name="location"
          onChange={handleChange}
          value={location} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Type_of_bird">
        <BirdDropdown />
      </Form.Group>
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
            <Form.Group className="text-center" >
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image}  />
                  </figure>
                  <div>
                    <Button
                      className={`${btnStyles.Button}`} 
                      htmlFor='image-upload'
                    > Change Picture
                     </Button>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify content center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={PinkUpload}
                    message="Upload a picture of your bird here"
                  />
                </Form.Label>
              )}
              <Form.File 
                id="image-upload" 
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
                width={300}
                />
            </Form.Group>
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

export default PostCreateFrom;