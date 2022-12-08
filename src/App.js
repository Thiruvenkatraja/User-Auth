import Add from './Components/Add';
import Edit from './Components/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserList  from "./Components/List" ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={'/add-user'}  className="nav-link">
                User Form
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav>
                <Link to={'/user-list'}  className="nav-link">
                  User-List
              </Link>
                </Nav>
            </Nav>
          </Container>
        </Navbar>
      <Container>
        <Row>
          <Col md={12}>
              <div className="wrapper">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={(props) => <Add {...props}/> }
                    />
                     <Route
                      exact
                      path="/add-user"
                      component={(props) => <Add {...props}/> }
                    />
                      <Route
                      exact
                      path="/edit-user/:id"
                      component={(props) => <Edit  {...props}/>}
                    />
                     <Route
                      exact
                      path="/user-list"
                      component={(props) => <UserList {...props}/>}
                    />
                  </Switch>
              </div>

          </Col>
        </Row>
      </Container>
      </header>
      </Router>
    </div>
  );
}

export default App;
