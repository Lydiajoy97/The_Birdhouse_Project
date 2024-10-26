import React from "react";
import styles from "../../styles/Posts.module.css";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const {  
    favorite_bird,
    about_me,
    id,
   } = props;

//   const currentUser = useCurrentUser();
//   const is_owner = currentUser?.username === owner; 

  return <Card className={styles.Post}> 
       <Link to={`/profiles/${id}/edit`}>
           Edit Profile
          </Link>
        <div>
          {about_me && <Card.Title className="text-center">{about_me}</Card.Title>}
          {favorite_bird && <Card.Text>{favorite_bird}</Card.Text>}
        </div>
  </Card>
};

export default Profile;