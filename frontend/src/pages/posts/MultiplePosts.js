import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

import appstyles from "../../App.module.css";
import styles from "../../styles/PostPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Posts";


function ManyBirdPostsPage({ message, filter = "" }) {
    const [posts, setPosts] = useState({results:[]});
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchBirdPost = async () => {
            try {
                const {data} = await axiosReq.get(`/birdpost/?${filter}`)
                    setPosts(data);
                    setHasLoaded(true);
            }catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        fetchBirdPost();
    }, [filter, pathname]);

    //  from the Code Insitute moments walkthrough
    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <p>List of posts here</p>
                {hasLoaded ? (
                    <>
                    {posts.results.lenght ? (
                        posts.results.map(posts => (
                           < Post key={posts.id} {...posts} />
                        ))
                    ) : ( 
                        console.log('show my results asset')
                    )}
                    </>
                ) : ( 
                    console.log('show loading spinner')
                )}
            </Col>
            <Col md={4} className="d-None d-lg-block p-0 p-lg-2">
                <p>Placeholder text</p>
            </Col>
        </Row>

    );
}

export default ManyBirdPostsPage;