import React from "react";
import styles from "../../styles/Posts.module.css";
import { Card, Media, } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { PostDropdown } from "../../components/PostDropdown";

// Code Institutes moments walkthrough
const ProfilePage = (props)  => {
    const {
        id,
        display_name,
        favorite_bird,
        about_me,
        posts_count,
        data,
        owner,
    } = props; 
    
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/profiles/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/api/profiles/${data.id}`);
            history.push("/profiles");
        } catch (err) {
            console.log(err);
        }
    };
    return <Card className={styles.Post}>
        <Card.Body>
            <Media className= "align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                        {currentUser?.username} {is_owner}
                        <br/>
                        <PostDropdown 
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        /> 
                </div>
            </Media>
        </Card.Body>
        <Card.Text></Card.Text>
        <Card.Body> 
               <h2>Name:</h2> {display_name && <Card.Title className="text-center">{display_name}</Card.Title>}
               <br/>
               <h2>About you: </h2> {about_me && <Card.Text>{about_me}</Card.Text>}<br/>
               <h2>Favorite bird: </h2>{favorite_bird && <Card.Text>{favorite_bird}</Card.Text>}<br/>
               <h2>Current Posts: </h2>{posts_count}
            <div className={styles.PostBar}>  
          </div>
        </Card.Body>
    </Card>
}
;

export default ProfilePage;