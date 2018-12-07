import React from 'react';
import { Card, Button, Table, message, Modal, Form, Input, Radio } from 'antd';
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
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      page: 1,
      showFinishOrder: false,
      selectedRowKeys: [],
      selectedRows: [],
      visible: false,
      title: ''
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
  handleOperations = type => {
    if (type === 'add') {
      this.setState({ visible: true, title: '添加员工' });
    }
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
            icon="plus"
            onClick={() => {
              this.handleOperations('add');
            }}
          >
            添加员工
          </Button>
          <Button type="primary" icon="edit">
            编辑详情
          </Button>
          <Button type="primary">员工详情</Button>
          <Button type="primary" icon="delete">
            删除详情
          </Button>
          <Table
            columns={columns}
            dataSource={this.state.list}
            rowKey={row => row.user_id}
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
          title={this.state.title}
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={() => {
            this.setState({ visible: false });
          }}
        >
          <FormUser />
        </Modal>
      </div>
    );
  }
}

export default User;

class UserForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    };
    return (
      <Form>
        <Form.Item label="姓名" {...formItemLayout}>
          {getFieldDecorator('user_name')(<Input type="text" />)}
        </Form.Item>
        <Form.Item label="状态" {...formItemLayout}>
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="1">全职</Radio>
              <Radio value="2">兼职</Radio>
            </Radio.Group>
          )}
        </Form.Item>
      </Form>
    );
  }
}

const FormUser = Form.create()(UserForm);
