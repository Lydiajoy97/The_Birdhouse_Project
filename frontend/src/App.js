import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";
import "./api/axiosDefaults";
import AccountCreation from "./pages/auth/AccountCreation";
import SignInForm from "./pages/auth/signin";
import PostCreateFrom from "./pages/posts/PostCreateForm"
import BirdPostPage from "./pages/posts/BirdPostPage";
import BirdPostEditForm from "./pages/posts/BirdPostEditForm";
import HomePage from "./pages/homepage/HomePage";
import ManyBirdPostsPage from "./pages/posts/ManyBirdPostsPage";
import EditProfile from "./pages/profile/EditProfileForm";
import CreateProfile from "./pages/profile/EditProfileForm";
import ProfilePostPage from "./pages/profile/ProfileIdPage";
import AllProfiles from "./pages/profile/AllProfiles";
import Message from "./pages/redirects/Message";

/* Built using Code insitute walkthrough*/
function App() { 

  return ( 
        <div className={styles.App}>
          <NavBar />
            <Container className={styles.Main}>
              <Switch>
                <Route exact path="/" render={() => <HomePage/>} />
                <Route exact path="/approval" render={() => <Message />} />
                <Route exact path="/birdpost" render={() => <ManyBirdPostsPage/>}/>
                <Route exact path="/signup"  render={() => <AccountCreation/>} />
                <Route exact path="/signin" render={() => <SignInForm/>} />
                <Route exact path="/birdpost/create" render={() => <PostCreateFrom/>} />
                <Route exact path="/birdpost/:id" render={() => <BirdPostPage/>} />
                <Route exact path="/birdpost/:id/edit" render={() => <BirdPostEditForm />} />
                <Route exact path="/profiles" render={() => <AllProfiles />} />
                <Route exact path="/profiles/:id" render={() => <ProfilePostPage />} />
                <Route exact path="/profiles/create" render={() => <CreateProfile />} />
                <Route exact path="/profiles/:id/edit" render={() => <EditProfile />} />
                <Route render={() => <p> Page not found! </p>} />
              </Switch>
            </Container>
        </div>
  );
}

export default App;
