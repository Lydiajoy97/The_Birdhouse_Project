import React from 'react'
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";

const ProfilePost = (props)  => {

        const { 
            display_name,
            about_me,
            favorite_bird,
            id,
            owner,
        } = props; 

        useEffect(() => {
            const ProfilePosts = async () => {
                try {
                    const {data} = await axiosReq.get(`/api/profiles?${data.id}`);
                    ProfilePosts();
                }catch (err) {
                    console.log(err);
                }
            };
        },);

        const currentUser = useCurrentUser();

    return (
    <Card>
        <Link
      to="/profiles/:id/edit"
    >
      <i className="far fa-plus-square"></i> Edit Profile
    </Link>
          <Card.Body>
               Name to be displayed: {display_name && <Card.Text>{display_name}</Card.Text>}
               <br />
               About you: {about_me && <Card.Text>{about_me}</Card.Text>}
               <br />
               Favorite bird: {favorite_bird && <Card.Text>{favorite_bird}</Card.Text>}
            </Card.Body>
    </Card>
  )
};

export default ProfilePost;