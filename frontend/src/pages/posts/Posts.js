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
        likes_count,
        like_id,
        title,
        content, 
        image, 
        updated_at, 
        comments_count,
        BirdPostPage,
        setBirdPosts,
    } = props;
    
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { post:id });
            setBirdPosts((prevBirdPosts) => ({
                ...prevBirdPosts,
                results: prevBirdPosts.results.map((post) => {
                    return post.id === id
                    ? {...post, likes_count: post.likes_count + 1, like_id: data.id }
                    : post;
                }),
            }));
        } catch (err) {
          console.log(err);
        }
    };
    
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
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          {/* {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count} */}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
};

export default Post;