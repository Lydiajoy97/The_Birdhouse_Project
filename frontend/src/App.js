import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";
import "./api/axiosDefaults";
import AccountCreation from "./pages/auth/AccountCreation";
import SignInForm from "./pages/auth/signin";
import PostCreateFrom from "./pages/posts/PostCreateForm"
import BirdPostPage from "./pages/posts/BirdPostPage";
import ScrollandSearch from "./pages/posts/ScrollandSearch";
import BirdPostEditForm from "./pages/posts/BirdPostEditForm";
import HomePage from "./pages/homepage/HomePage";
import Profile from "./pages/profile/Profile";

/* Built using Code insitute walkthrough*/
function App() { 

  return ( 
        <div className={styles.App}>
          <NavBar />
            <Container className={styles.Main}>
              <Switch>
                <Route exact path="/" render={() => <HomePage/>} />
                <Route exact path="/birdhouse" render={() => <ScrollandSearch/>}/>
                <Route exact path="/signup"  render={() => <AccountCreation/>} />
                <Route exact path="/signin" render={() => <SignInForm/>} />
                <Route exact path="/posts/create" render={() => <PostCreateFrom/>} />
                <Route exact path="/posts/:id" render={() => <BirdPostPage/>} />
                <Route exact path="/posts/:id/edit" render={() => <BirdPostEditForm />} />
                <Route exact path="/birdpost/:id" render={() => <BirdPostPage />} />
                <Route exact path="/profiles" render={() => <Profile />} />
                <Route render={() => <p>Page not found!</p>} />
              </Switch>
            </Container>
        </div>
  );
}

export default App;
