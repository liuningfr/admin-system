import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Main from "./../route1/Main";
import About from "./../route1/About";
import Topics from "./../route1/Topics";
import Home from "./Home";

class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </Home>
      </Router>
    );
  }
}

export default IRouter;
