import React from "react";
import { Card, notification, Button } from "antd";
import "./ui.less";

class Notice extends React.Component {
  openNotice = (type, placement) => {
    notification[type]({
      message: "This is a notification.",
      description: "This is description.",
      placement
    });
  };
  render() {
    return (
      <div>
        <Card title="通知提醒框">
          <Button
            type="primary"
            onClick={() => this.openNotice("success", "topLeft")}
          >
            Success
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotice("info", "topRight")}
          >
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotice("warning", "bottomLeft")}
          >
            Warning
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotice("error", "bottomRight")}
          >
            Error
          </Button>
        </Card>
      </div>
    );
  }
}

export default Notice;
