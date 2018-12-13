import React from 'react';
import { Card, Button, Table, Form, Input, Radio, Modal } from 'antd';
import moment from 'moment';
import axios from './../../axios';

const columns = [
  {
    title: '角色ID',
    dataIndex: 'role_id'
  },
  {
    title: '角色名称',
    dataIndex: 'role_name'
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    render: text => moment(text).format('YYYY-MM-DD')
  },
  {
    title: '使用状态',
    dataIndex: 'state',
    render: text => (text === 1 ? '启用' : '停用')
  },
  {
    title: '授权时间',
    dataIndex: 'auth_time',
    render: text => moment(text).format('YYYY-MM-DD')
  },
  {
    title: '授权人',
    dataIndex: 'auth_person'
  }
];

class Privilege extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      selectedRowKeys: [],
      selectedRows: [],
      showCreateRole: false
    };
  }
  componentDidMount() {
    axios.requestList(this, { url: '/role/list', method: 'get' });
  }
  createRole = () => {
    this.setState({ showCreateRole: true });
  };
  render() {
    return (
      <div>
        <Card>
          <Button type="primary" onClick={this.createRole}>
            创建角色
          </Button>
          <Button type="primary">设置权限</Button>
          <Button type="primary">用户授权</Button>
        </Card>
        <Card>
          <Table
            columns={columns}
            dataSource={this.state.list}
            rowSelection={{
              type: 'radio',
              onChange: (selectedRowKeys, selectedRows) => {
                this.setState({ selectedRowKeys, selectedRows });
              }
            }}
          />
        </Card>
        <Modal
          title="创建角色"
          visible={this.state.showCreateRole}
          onCancel={() => {
            this.setState({ showCreateRole: false });
          }}
        >
          <FormRole />
        </Modal>
      </div>
    );
  }
}

export default Privilege;

class RoleForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    };
    return (
      <Form>
        <Form.Item label="姓名" {...formItemLayout}>
          {getFieldDecorator('user_name', {})(<Input type="text" />)}
        </Form.Item>
        <Form.Item label="状态" {...formItemLayout}>
          {getFieldDecorator('radio-group', {})(
            <Radio.Group>
              <Radio value={1}>全职</Radio>
              <Radio value={2}>兼职</Radio>
            </Radio.Group>
          )}
        </Form.Item>
      </Form>
    );
  }
}

const FormRole = Form.create()(RoleForm);
