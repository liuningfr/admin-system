import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./../route1/Main";
import About from "./../route1/About";
import Topics from "./../route1/Topics";
import Home from "./Home";
import NotFound from "./NotFound";

class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/topics/:id" component={Topics} />
            <Route component={NotFound} />
          </Switch>
        </Home>
      </Router>
    );
  }
}

export default IRouter;
