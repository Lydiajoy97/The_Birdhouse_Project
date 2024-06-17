/* From Code Insitutes Moments walkthrough */
import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import PinkUpload from "../../assets/PinkUpload.png";

import styles from "../../styles/CreateEditPosts.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Assets";
import { Image } from "react-bootstrap";

function CreatePosts() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    name:"",
    location:"",
    content:"",
    image:"",
    catogries:"",
  });
  const { name, location, content, image, catogries } = postData;

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
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Tell us about the bird you spotted</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={8} 
          name="content"
          value={content}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Location</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Help others to find it" 
          name="location"
          value={location}
        />
      </Form.Group>
      <Form.Select 
        aria-label="Default select example" 
        name="catorgies"
        value={catogries}>
        <option>What Type of Bird is it?</option>
        <option value="1">Owl</option>
        <option value="2">Albatross</option>
        <option value="3">Hummingbird</option>
        <option value="4">Passerine</option>
        <option value="5">Chickens</option>
        <option value="6">Budgies</option>
        <option value="7">Swift</option>
        <option value="8">Aquatic Birds</option>
        <option value="8">Other/ Unsure</option>
     </Form.Select>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue}  btn`} 
                      htmlFor='image-upload'
                    >
                      Change Picture
                     </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset className="pink-upload" 
                    src={PinkUpload} 
                    message="Upload a picture of your bird here"
                    onChange={handleChangeImage} />
                </Form.Label>
              )}
              

              <Form.File id="image-upload" accept="image/*"/>
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

export default CreatePosts;