import React from 'react';

class Topics extends React.Component {
  render() {
    return (
      <div>
        This is topics page.<br />
        id:{this.props.match.params.id}
      </div>
    );
  }
}

export default Topics;