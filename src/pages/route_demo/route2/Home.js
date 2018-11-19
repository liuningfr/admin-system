import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Main2</Link>
          </li>
          <li>
            <Link to="/about">About2</Link>
          </li>
          <li>
            <Link to="/topics">Topics2</Link>
          </li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default Home;
