import React from "react";
import styles from "../../styles/Posts.module.css";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";
import { Link } from "react-router-dom";


const Profile = (props) => {
  const {  id, owner, profile } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner; 
  
  const history = useHistory();

  const handleEdit = () => {
      history.push(`/profiles/${id}/edit`);
  };

  const handleDelete = async () => {
      try {
          await axiosRes.delete(`/api/profiles/${id}`);
          history.push("profiles/create");
      } catch (err) {
          console.log(err);
      }
  };

  return <Card className={styles.Post}>
       <Link to={`/profiles/${id}/edit`}>
            <i className="far fa-comments" /> Edit Profile
          </Link>
      <Card.Body>
             {profile}
          <div className={styles.PostBar}>
        </div>
      </Card.Body>
  </Card>
};

export default Profile;