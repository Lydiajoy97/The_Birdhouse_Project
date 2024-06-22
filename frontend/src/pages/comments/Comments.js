import React from 'react';
import styles from "../../styles/Comment.module.css"
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { PostDropdown } from '../../components/PostDropdown';
import { axiosRes } from '../../api/axiosDefaults';
// From moments walkthrough
const Comment = (props) => {
    const { profile_id, owner, updated_at, content, id, setPost, setComments, } = props;
    
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
      try {
        await axiosRes.delete(`/comments/${id}/`);
        setPost((prevPost) => ({
          results: [
            {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1
          },
        ],
      }));

      setComments(prevComments => ({
        ...prevComments, 
        results: prevComments.results.filter(comment => comment.id !== id),
      }));
    } catch(err){}
  };


    return (
        <div>
           <hr />
            <Media>
              <Link to={`/profiles/${profile_id}`}>
                </Link>
                <Media.Body className="align-self-center ml-2">
                  <span className={styles.Owner}>{owner}</span>
                  <span className={styles.Date}>{updated_at}</span>
                  <p>{content}</p>
                </Media.Body>
                {is_owner && (
                  <PostDropdown handleDelete={handleDelete} handleEdit={() => {}} /> 
                )}
            </Media>
        </div>
    );
};

export default Comment;