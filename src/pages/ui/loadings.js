import React from 'react';
import { Card, Spin, Icon, Alert } from 'antd';
import './ui.less';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      size: 'default',
    };
  }
  render() {
    return (
      <div>
        <Card title="Spin的使用">
          <Spin size="small"/>
          <Spin style={{ margin: '0 20px' }}/>
          <Spin size="large"/>
          <Spin indicator={<Icon type="loading" />} style={{ marginLeft: 20 }}/>
        </Card>
        <Card title="内容遮罩">
        <Spin tip="加载中...">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        </Card>
      </div>
    );
  }
}

export default Buttons;