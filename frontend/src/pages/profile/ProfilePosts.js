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
        first_name,
        favorite_bird,
        about_me,
        posts_count,
        data, 
    } = props; 
    
    const currentUser = useCurrentUser();
    // const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/profiles/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/api/profiles/${data.id}`);
            history.push("/");
        } catch (err) {
            console.log(err);
        }
    };
    return <Card className={styles.Post}>
        <Card.Body>
            <Media className= "align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                        {currentUser?.username} 
                        <br/>
                        {currentUser && (
                        <PostDropdown 
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        /> )}
                </div>
            </Media>
        </Card.Body>
        <Card.Text></Card.Text>
        <Card.Body> 

               Name: {first_name && <Card.Title className="text-center">{first_name}</Card.Title>}<br/>
               About you: {about_me && <Card.Text>{about_me}</Card.Text>}<br/>
               Favorite bird: {favorite_bird && <Card.Text>{favorite_bird}</Card.Text>}<br/>
               Current Posts: {posts_count}
            <div className={styles.PostBar}>  
          </div>
        </Card.Body>
    </Card>
}
;

export default ProfilePage;