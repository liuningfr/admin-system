import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Topics from './Topics';

class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topics}></Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Home;