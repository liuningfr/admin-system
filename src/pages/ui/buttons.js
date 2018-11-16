import React from 'react';
import { Card, Button, Radio } from 'antd';
import './ui.less';
class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      size: 'default',
    };
  }
  handleClose = () => {
    this.setState({ loading: false });
  }
  handleLoad = () => {
    this.setState({ loading: true });
  }
  handleChange = e => {
    this.setState({ size: e.target.value });
  }
  render() {
    const { loading, size } = this.state;
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button disabled>Disabled</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search" />
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮">
          <Button type="primary" loading={loading}>确定</Button>
          <Button type="primary" shape="circle" loading={loading} />
          <Button loading={loading} onClick={this.handleLoad}>点击加载</Button>
          <Button shape="circle" loading={loading} />
          <Button type="primary" onClick={this.handleClose}>关闭</Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left">返回</Button>
            <Button type="primary" icon="right">前进</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸">
          <Radio.Group value={size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={size}>Primary</Button>
          <Button size={size}>Default</Button>
          <Button type="dashed" size={size}>Dashed</Button>
          <Button type="danger" size={size}>Danger</Button>
          <Button disabled size={size}>Disabled</Button>
        </Card>
      </div>
    );
  }
}

export default Buttons;