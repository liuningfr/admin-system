import React from 'react';
import axios from './../../axios';
import { Card, Form, Select, Button, Table, DatePicker } from 'antd';
import './index.less';

const columns = [
  {
    title: '订单ID',
    dataIndex: 'order_id'
  },
  {
    title: '城市名',
    dataIndex: 'city_name',
    render: value => ['北京', '上海'][value - 1]
  },
  {
    title: '营运模式',
    dataIndex: 'op_mode',
    render: value => ['自营', '加盟'][value - 1]
  },
  {
    title: '下单时间',
    dataIndex: 'time'
  }
];
class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      page: 1,
      showOpenCity: false
    };
  }
  componentDidMount() {
    this.requestList();
  }
  requestList = () => {
    axios
      .ajax({
        url: '/order/list',
        method: 'get'
      })
      .then(res => {
        this.setState({ list: res.data });
      });
  };
  render() {
    return (
      <div>
        <Card>
          <FormFiter />
        </Card>
        <Card>
          <Button type="primary">订单详情</Button>
          <Button type="primary">结束订单</Button>
          <Table
            columns={columns}
            dataSource={this.state.list}
            rowKey={row => row.city_id}
            pagination={{
              current: this.state.page,
              pageSize: 5,
              onChange: page => {
                this.setState({ page });
              }
            }}
          />
        </Card>
      </div>
    );
  }
}

export default City;

class Filter extends React.Component {
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      console.log(values);
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <Form.Item label="城市">
          {getFieldDecorator('city_id')(
            <Select style={{ width: 120 }}>
              <Select.Option value={0}>全部</Select.Option>
              <Select.Option value={1}>北京</Select.Option>
              <Select.Option value={2}>上海</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="营运模式">
          {getFieldDecorator('op_mod')(
            <Select style={{ width: 120 }}>
              <Select.Option value={0}>全部</Select.Option>
              <Select.Option value={1}>自营</Select.Option>
              <Select.Option value={2}>加盟</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="下单时间">
          {getFieldDecorator('time')(
            <DatePicker style={{ width: 280 }} placeholder="请选择时间" />
          )}
        </Form.Item>
        <Form.Item style={{ marginRight: 2 }}>
          <Button type="primary" onClick={this.handleSearch}>
            查询
          </Button>
        </Form.Item>
        <Form.Item>
          <Button>重置</Button>
        </Form.Item>
      </Form>
    );
  }
}
const FormFiter = Form.create()(Filter);
