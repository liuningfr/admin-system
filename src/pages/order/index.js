import React from 'react';
import moment from 'moment';
import { Card, Form, Button, Table, Modal } from 'antd';
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
    axios
      .ajax({
        url: '/order/list',
        method: 'get'
      })
      .then(res => {
        this.setState({ list: res.data });
      });
  };
  handleFinish = () => {
    this.setState({ showFinishOrder: true });
  };
  render() {
    return (
      <div>
        <Card>
          <BaseForm formList={formList} />
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

// class Filter extends React.Component {
//   handleSearch = e => {
//     e.preventDefault();
//     this.props.form.validateFields((errors, values) => {
//       console.log(values);
//     });
//   };
//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Form layout="inline">
//         <Form.Item label="城市">
//           {getFieldDecorator('city_id')(
//             <Select style={{ width: 120 }}>
//               <Select.Option value={0}>全部</Select.Option>
//               <Select.Option value={1}>北京</Select.Option>
//               <Select.Option value={2}>上海</Select.Option>
//             </Select>
//           )}
//         </Form.Item>
//         <Form.Item label="营运模式">
//           {getFieldDecorator('op_mod')(
//             <Select style={{ width: 120 }}>
//               <Select.Option value={0}>全部</Select.Option>
//               <Select.Option value={1}>自营</Select.Option>
//               <Select.Option value={2}>加盟</Select.Option>
//             </Select>
//           )}
//         </Form.Item>
//         <Form.Item label="下单时间">
//           {getFieldDecorator('time')(
//             <DatePicker style={{ width: 280 }} placeholder="请选择时间" />
//           )}
//         </Form.Item>
//         <Form.Item style={{ marginRight: 2 }}>
//           <Button type="primary" onClick={this.handleSearch}>
//             查询
//           </Button>
//         </Form.Item>
//         <Form.Item>
//           <Button>重置</Button>
//         </Form.Item>
//       </Form>
//     );
//   }
// }
// const FormFiter = Form.create()(Filter);
