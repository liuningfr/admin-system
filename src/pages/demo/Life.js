import React from 'react';
import Child from './Child';
import './Life.less';
class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return <div className="content">
      <p>React 生命周期</p>
      <button onClick={this.handleAdd}>点击一下</button>
      <p>{this.state.count}</p>
      <Child name={this.state.count} />
    </div>;
  }
}

export default Life;