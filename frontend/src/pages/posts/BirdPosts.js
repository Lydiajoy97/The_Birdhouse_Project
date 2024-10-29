import React from "react";
import styles from "../../styles/Posts.module.css";
import { Card, Media, } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { PostDropdown } from "../../components/PostDropdown";

// Code Institutes moments walkthrough
const Post = (props)  => {
    const {
        id, 
        owner, 
        title,
        type_of_bird,
        content, 
        location,
        image, 
        comments_count,
    } = props; 
    
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();
    const approved = props.approved;

    const handleEdit = () => {
        history.push(`/birdpost/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/birdpost/${id}`);
            history.push("/birdpost/create");
        } catch (err) {
            console.log(err);
        }
    };
    if (approved) {
    return <Card className={styles.Post}>
        <Card.Body>
            <Media className= "align-items-center justify-content-between">
                    {owner}
                <div className="d-flex align-items-center">
                    {is_owner && (
                        <PostDropdown 
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    )}
                </div>
            </Media>
        </Card.Body>
        <Card.Text></Card.Text>
        <Link to={`/birdpost/${id}`}>
           <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
               {title && <Card.Title className="text-center">{title}</Card.Title>}
               {content && <Card.Text>{content}</Card.Text>}
               {type_of_bird && <Card.Text>{type_of_bird}</Card.Text>}
               {location && <Card.Text>{location}</Card.Text>}
            <div className={styles.PostBar}>     
          <Link to={`/birdpost/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
          </div>
        </Card.Body>
    </Card>
    }
};

export default Post;