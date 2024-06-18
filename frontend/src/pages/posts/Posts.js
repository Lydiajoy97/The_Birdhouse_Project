import React from "react";
import styles from "../../styles/Posts.module.css";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import Avatar from "../../components/Avatar"

const Post = (props)  => {
    const {
        id, 
        owner, 
        profile_id,
        profile_image,
        comments_count,
        like_id,
        title,
        content, 
        image, 
        updated_at, 
        BirdPostPage,
    } = props;
    
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner
    
    return <Card className={styles.Post}>
        <Card.Body>
            <Media className= "align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    {/* <Avatar src={profile_image} height={55} /> */}
                    {owner}
                </Link>
                <div className="d-flex align-items-center">
                    <span>{updated_at}</span>
                    {is_owner && BirdPostPage && "..."}
                </div>
            </Media>
        </Card.Body>
        <Link>
           <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
            {title && <Card.Title className="text-center">{title}</Card.Title>}
        </Card.Body>
        </Card>
};

export default Post;