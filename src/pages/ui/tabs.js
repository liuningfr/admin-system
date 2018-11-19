import React from 'react';
import { Card, Message, Button } from 'antd';
import './ui.less';

class Tabs extends React.Component {
  showMessage = type => {
    Message[type](`This is a ${type}.`);
  };
  render() {
    return (
      <div>
        <Card title="Tab页签">
          <Button type="primary" onClick={() => this.showMessage('success')}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.showMessage('info')}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.showMessage('warning')}>
            Warning
          </Button>
          <Button type="primary" onClick={() => this.showMessage('error')}>
            Error
          </Button>
          <Button type="primary" onClick={() => this.showMessage('loading')}>
            Loading
          </Button>
        </Card>
      </div>
    );
  }
}

export default Tabs;
