import React from 'react';
import moment from 'moment';
import { Card, Form, Button, Table, Modal, message } from 'antd';
import axios from './../../axios';
import BaseForm from './../../components/BaseForm';
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

const formList = [
  {
    type: 'select',
    label: '城市',
    field: 'city_id',
    initialValue: 0,
    width: 120,
    list: [
      { id: 0, name: '全部' },
      { id: 1, name: '北京' },
      { id: 2, name: '上海' }
    ]
  },
  {
    type: 'select',
    label: '营运模式',
    field: 'op_mode',
    initialValue: 0,
    width: 120,
    list: [
      { id: 0, name: '全部' },
      { id: 1, name: '自营' },
      { id: 2, name: '加盟' }
    ]
  },
  {
    type: 'datepicker',
    label: '下单时间',
    field: 'time',
    width: 280
  }
];

const formItemLayout = {
  labelCol: {
    span: 5
  },
  wrapperCol: {
    span: 19
  }
};
class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      page: 1,
      showFinishOrder: false,
      selectedRowKeys: [],
      selectedRows: []
    };
  }
  componentDidMount() {
    this.requestList();
  }
  requestList = () => {
    axios.requestList(this, { url: '/order/list', method: 'get' });
  };
  handleFinish = () => {
    this.setState({ showFinishOrder: true });
  };
  handleSubmit = () => {
    message.success('查询成功');
  };
  render() {
    return (
      <div>
        <Card>
          <BaseForm formList={formList} onSubmit={this.handleSubmit} />
        </Card>
        <Card>
          <Button
            type="primary"
            onClick={() => {
              this.props.history.push('/common/order/detail/00124587');
            }}
          >
            订单详情
          </Button>
          <Button type="primary" onClick={this.handleFinish}>
            结束订单
          </Button>
          <Table
            columns={columns}
            dataSource={this.state.list}
            rowKey={row => row.order_id}
            pagination={{
              current: this.state.page,
              pageSize: 5,
              onChange: page => {
                this.setState({ page });
              }
            }}
            rowSelection={{
              type: 'radio',
              onChange: (selectedRowKeys, selectedRows) => {
                this.setState({ selectedRowKeys, selectedRows });
              }
            }}
          />
        </Card>
        <Modal
          title="结束订单"
          visible={this.state.showFinishOrder}
          onCancel={() => {
            this.setState({ showFinishOrder: false });
          }}
        >
          <Form>
            <Form.Item label="订单ID" {...formItemLayout}>
              00124587
            </Form.Item>
            <Form.Item label="城市名" {...formItemLayout}>
              北京
            </Form.Item>
            <Form.Item label="下单时间" {...formItemLayout}>
              {moment().format('YYYY-MM-DD')}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default City;
