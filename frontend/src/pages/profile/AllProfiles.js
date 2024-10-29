import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../../styles/PostPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import ProfilePage from "./ProfilePosts";

//  Code Institutes moments walkthrough
function AllProfiles({filter = "" }) {
    const [posts, setPosts] = useState({results:[]});
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    const [query, setQuery] =useState("");

    useEffect(() => {
        const fetchProfilePage = async () => {
            try {
                const {data} = await axiosReq.get(`/profiles?${filter}search=${query}`);
                setPosts(data);
                setHasLoaded(true);
            }catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchProfilePage();   
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [filter, query, pathname]);

    //  from the Code Insitute moments walkthrough
    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <p>Search for your friends profiles...</p>
                <i className={`fas fa-search ${styles.SearchIcon} `} />
                <Form 
                    className={styles.SearchBar}
                    onSubmit={(event) => event.preventDefault()}
                >
                    <Form.Control
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        type="text"
                        className="mr-sm-2"
                        placeholder="Search Posts"
                    />
                </Form>
                {hasLoaded ? (
                    <>
                    {posts.results.length ? (
                        posts.results.map(posts => (
                           <ProfilePage key={posts.id} {...posts} />
                        ))
                    ) : ( 
                        console.log('show my results asset')
                    )}
                    </>
                ) : ( 
                    console.log('show loading spinner')
                )}
            </Col>
        </Row>

    );
}

export default AllProfiles;