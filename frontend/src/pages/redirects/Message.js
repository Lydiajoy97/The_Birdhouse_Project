import React from 'react';
import { Container } from 'react-bootstrap';

const Message = () => {
    return (
      <Container>
        <h1>Post Pending...</h1>
        <br/>
        <p> Thanks for your post...sit tight whilst we approve it!</p><br/>
        <p> If your post is approved it will be posted to the BirdHouse!</p>
      </Container>
    );
  };

export default Message;