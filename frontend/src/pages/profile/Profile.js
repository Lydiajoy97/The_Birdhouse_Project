import React from "react";
import styles from "../../styles/Posts.module.css";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";
import { Link } from "react-router-dom";


const Profile = (props) => {
  const {  id, owner, display_name, favorite_bird, about_me } = props;

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
             Edit Profile
          </Link>
        <div>
        <Card.Body>
               {display_name && <Card.Title className="text-center">{display_name}</Card.Title>}
               {about_me && <Card.Text>{about_me}</Card.Text>}
               {favorite_bird && <Card.Text>{favorite_bird}</Card.Text>}
        </Card.Body>
        </div>
  </Card>
};

export default Profile;