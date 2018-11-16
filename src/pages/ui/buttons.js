import React from 'react';
import { Card, Button, Icon } from 'antd';
import './buttons.less';
class Buttons extends React.Component {
  render() {
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
          <Button type="primary" loading>确定</Button>
          <Button type="primary" shape="circle" loading />
          <Button loading>点击加载</Button>
          <Button shape="circle" loading />
          <Button type="primary">关闭</Button>
        </Card>
      </div>
    );
  }
}

export default Buttons;