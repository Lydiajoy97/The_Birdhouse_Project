import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import ProfilePage from "./ProfilePosts";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// Code Insitutes Moments Walkthrough
function ProfilePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`api/profiles/${id}`),
        ]);
        setPost({ results: [post] });
      } catch(err) {
    }
  }; 

  handleMount();
  }, [id, currentUser]);


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <ProfilePage {...post.results[0]} setPosts={setPost} ProfilePage />
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      </Col>
    </Row>
  );
}

export default ProfilePostPage;