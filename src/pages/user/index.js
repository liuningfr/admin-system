import React from 'react';
import { Card, Button, Table, message } from 'antd';
import axios from './../../axios';
import BaseForm from './../../components/BaseForm';
import './index.less';

const columns = [
  {
    title: '员工ID',
    dataIndex: 'user_id'
  },
  {
    title: '姓名',
    dataIndex: 'user_name'
  },
  {
    title: '状态',
    dataIndex: 'user_mode',
    render: value => ['全职', '兼职'][value - 1]
  },
  {
    title: '生日',
    dataIndex: 'birth'
  }
];

const formList = [
  {
    type: 'input',
    label: '姓名',
    field: 'user_name',
    placeholder: '请输入姓名',
    width: 120
  },
  {
    type: 'input',
    label: '手机号',
    field: 'tel',
    placeholder: '请输入手机号',
    width: 120
  }
];
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
    axios.requestList(this, { url: '/user/list', method: 'get' });
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
            员工详情
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
      </div>
    );
  }
}

export default City;
