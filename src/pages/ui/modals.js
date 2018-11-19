import React from "react";
import { Card, Button, Modal } from "antd";
import "./ui.less";

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false
    };
  }
  handleOpen = param => {
    this.setState({ [param]: true });
  };
  handleConfirm = param => {
    Modal[param]({
      title: param
    });
  };
  render() {
    const { showModal1, showModal2, showModal3, showModal4 } = this.state;
    return (
      <>
        <Card title="基础模态框">
          <Button type="primary" onClick={() => this.handleOpen("showModal1")}>
            {" "}
            Open
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal2")}>
            自定义页脚
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal3")}>
            顶部20px弹框
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal4")}>
            水平垂直居中
          </Button>
        </Card>
        <Card title="信息确认框">
          <Button type="primary" onClick={() => this.handleConfirm("confirm")}>
            Confirm
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("info")}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("success")}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("warning")}>
            Warning
          </Button>
        </Card>
        <Modal
          title="Modal"
          visible={showModal1}
          onCancel={() => {
            this.setState({ showModal1: false });
          }}
        >
          <p>This is a Modal.</p>
        </Modal>
        <Modal
          title="Modal"
          okText="好的"
          cancelText="取消"
          visible={showModal2}
          onCancel={() => {
            this.setState({ showModal2: false });
          }}
        >
          <p>This is a Modal.</p>
        </Modal>
        <Modal
          title="Modal"
          visible={showModal3}
          style={{ top: 20 }}
          onCancel={() => {
            this.setState({ showModal3: false });
          }}
        >
          <p>This is a Modal.</p>
        </Modal>
        <Modal
          title="Modal"
          visible={showModal4}
          centered
          onCancel={() => {
            this.setState({ showModal4: false });
          }}
        >
          <p>This is a Modal.</p>
        </Modal>
      </>
    );
  }
}

export default Modals;
