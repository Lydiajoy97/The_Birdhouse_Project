import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

import appstyles from "../../App.module.css";
import styles from "../../styles/PostPage.module.css";

function ManyBirdPostsPage() {
    //  from the Code Insitute moments walkthrough
    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <p>List of posts here</p>
            </Col>
            <Col md={4} className="d-None d-lg-block p-0 p-lg-2">
                <p>Placeholder text</p>
            </Col>
        </Row>

    );
}

export default ManyBirdPostsPage;