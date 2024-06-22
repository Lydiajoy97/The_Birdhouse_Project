import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Posts";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function BirdPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
        try {
          const [{ data: post }] = await Promise.all([
            axiosReq.get(`/birdpost/${id}`),
          ]);
          setPost({results: [post] });
          setComments(comments)
          console.log(post);
        } catch(err) {
            console.log(err);
    }
  }; 

  handleMount();
  }, [id]);


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p></p>
        <Post {...post.results[0]} setPost={setPost} BirdPostPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
            ) : comments.results.length ? (
              "Comments"
            ) : null }
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      </Col>
    </Row>
  );
}

export default BirdPostPage;