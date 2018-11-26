import React from 'react';
import axios from './../../axios';
import { Card, Form, Select, Button, Table } from 'antd';

const columns = [
  {
    title: '城市ID',
    dataIndex: 'city_id'
  },
  {
    title: '城市名',
    dataIndex: 'city_name'
  },
  {
    title: '营运模式',
    dataIndex: 'op_mode'
  }
];
class City extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <FormFiter />
        </Card>
        <Card>
          <Button type="primary">创建</Button>
          <Table columns={columns} />
        </Card>
      </div>
    );
  }
}

export default City;

class Filter extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <Form.Item label="城市">
          {getFieldDecorator('city_id')(
            <Select style={{ width: 120 }}>
              <Select.Option value="0">全部</Select.Option>
              <Select.Option value="1">北京</Select.Option>
              <Select.Option value="3">上海</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="营运模式">
          {getFieldDecorator('op_mod')(
            <Select style={{ width: 120 }}>
              <Select.Option value="0">全部</Select.Option>
              <Select.Option value="1">自营</Select.Option>
              <Select.Option value="3">加盟</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item style={{ marginRight: 2 }}>
          <Button type="primary">查询</Button>
        </Form.Item>
        <Form.Item>
          <Button>重置</Button>
        </Form.Item>
      </Form>
    );
  }
}
const FormFiter = Form.create()(Filter);
