import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route path= "/" render={() => <h1>Homepage</h1>} />
          <Route path= "/bird-spot" render={() => <h1>Bird Page</h1>} />
          <Route path= "/signin" render={() => <h1>Log in</h1>} />
          <Route path= "/signup" render={() => <h1>Create Account</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
