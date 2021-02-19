import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import ProjectScreen from "./components/screens/ProjectScreen";
import ProjectEditScreen from "./components/screens/ProjectEditScreen";
import ProjectListScreen from "./components/screens/ProjectListScreen";
import NotFoundScreen from './components/screens/NotFoundScreen'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3"  style={{ background: "#EFEFEF" }}>
        <Container >
          <Switch>
            {/* <HomeScreen /> */}
            <Route exact path="/" component={HomeScreen}></Route>
            <Route exact path="/login" component={LoginScreen}></Route>
            
            <Route
              exact
              path="/project/:id/edit"
              component={ProjectEditScreen}
            ></Route>
            <Route exact path="/project/:id" component={ProjectScreen}></Route>
            <Route exact path="/projectlist" component={ProjectListScreen}></Route>
            <Route
              exact
              path="/project:id/edit"
              component={ProjectEditScreen}
            ></Route>
            <Route component={NotFoundScreen}></Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
