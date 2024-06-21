import React from "react";
import styles from "../../styles/Posts.module.css";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
// import Avatar from "../../components/Avatar"

const Post = (props)  => {
    const {
        id, 
        owner, 
        profile_id,
        title,
        content, 
        image, 
        updated_at, 
        comments_count,
        BirdPostPage,
    } = props;
    
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

    return <Card className={styles.Post}>
        <Card.Body>
            <Media className= "align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
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
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
};

export default Post;