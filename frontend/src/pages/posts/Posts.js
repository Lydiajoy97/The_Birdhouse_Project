import React from "react";
import styles from "../../styles/Posts.module.css";
import { Card, Media, } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { PostDropdown } from "../../components/PostDropdown";

const Post = (props)  => {
    const {
        id, 
        owner, 
        profile_id,
        title,
        content, 
        location,
        image, 
        comments_count,
        BirdPostPage,
    } = props;
    
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/posts/${id}/edit`)
    }

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`posts/${id}/`);
            history.goBack();
        } catch (err) {
        }
    };

    console.log('is_owner', is_owner)

    return <Card className={styles.Post}>
        <Card.Body>
            <Media className= "align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    {owner}
                </Link>
                <div className="d-flex align-items-center">
                    {is_owner && BirdPostPage && (
                        <PostDropdown 
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        /> 
                    )}
                </div>
            </Media>
        </Card.Body>
        <Card.Text></Card.Text>
        <Link to={`/posts/${id}`}>
           <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
               {title && <Card.Title className="text-center">{title}</Card.Title>}
               {content && <Card.Text>{content}</Card.Text>}
               {location && <Card.Text>{location}</Card.Text>}
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