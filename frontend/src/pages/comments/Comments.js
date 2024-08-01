import React, { useState } from "react";
import styles from "../../styles/Comment.module.css"
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { PostDropdown } from '../../components/PostDropdown';
import EditComments from "./EditComments";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";

import { axiosRes } from '../../api/axiosDefaults';

// From moments walkthrough
const Comment = (props) => {
    const { profile_id, owner, updated_at, content, id, setPost, setComments, } = props;
    
    const [showEditForm, setShowEditForm] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
      try {
        await axiosRes.delete(`/api/comments/${id}`);
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
        <>
           <hr />
            <Media>
              <Link to={`/profiles/${profile_id}`}>
                </Link>
                <Media.Body className="align-self-center ml-2">
                  <span className={styles.Owner}>{owner}</span>
                  <span className={styles.Date}>{updated_at}</span>
                  {showEditForm ? (
                    <EditComments
                      id={id}
                      profile_id={profile_id}
                      content={content}
                      setComments={setComments}
                      setShowEditForm={setShowEditForm}
                    />
                  ) : (
                    <p>{content}</p>
                  )}
                </Media.Body>
                {is_owner && !showEditForm && (
                  <PostDropdown
                    handleEdit={() => setShowEditForm(true)}
                    handleDelete={handleDelete}
                  />
                )}
              </Media>
            </>
    );
};

export default Comment;