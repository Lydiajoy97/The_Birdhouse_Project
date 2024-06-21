import React from 'react';
import styles from "../../styles/Comment.module.css"
// From moments walkthrough
const Comment = (props) => {
    const { profile_id, owner, updated_at, content } = props;


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
            </Media>
        </div>
    );
};

export default Comment;