import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";
import AccountCreation from "./pages/auth/AccountCreation";

/* Built using Code insitute walkthrough*/
function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/bird-post" render={() => <h1>Bird Posts</h1>} />
          <Route exact path="/signup"  render={() => <AccountCreation/>} />
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
