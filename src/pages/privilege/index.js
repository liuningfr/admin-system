import React from 'react';
import {
  Card,
  Button,
  Table,
  Form,
  Input,
  Radio,
  Modal,
  Tree,
  Transfer
} from 'antd';
import moment from 'moment';
import axios from './../../axios';
import menuList from './../../config/menuConfig';

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
      targetKeys: [],
      showCreateRole: false,
      showEditPrivilege: false,
      showUserAuth: false
    };
  }
  componentDidMount() {
    axios.requestList(this, { url: '/role/list', method: 'get' });
  }
  createRole = () => {
    this.setState({ showCreateRole: true });
  };
  editPrivilege = () => {
    this.setState({ showEditPrivilege: true });
  };
  userAuth = () => {
    this.setState({ showUserAuth: true });
  };
  render() {
    return (
      <div>
        <Card>
          <Button type="primary" onClick={this.createRole}>
            创建角色
          </Button>
          <Button type="primary" onClick={this.editPrivilege}>
            设置权限
          </Button>
          <Button type="primary" onClick={this.userAuth}>
            用户授权
          </Button>
        </Card>
        <Card>
          <Table
            columns={columns}
            dataSource={this.state.list}
            rowKey={row => row.role_id}
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
            this.RoleForm.props.form.resetFields();
            this.setState({ showCreateRole: false });
          }}
        >
          <FormRole
            wrappedComponentRef={inst => {
              this.RoleForm = inst;
            }}
          />
        </Modal>
        <Modal
          title="编辑权限"
          visible={this.state.showEditPrivilege}
          onCancel={() => {
            this.PrivilegeForm.props.form.resetFields();
            this.setState({ showEditPrivilege: false });
          }}
        >
          <FormPrivilege
            wrappedComponentRef={inst => {
              this.PrivilegeForm = inst;
            }}
          />
        </Modal>
        <Modal
          title="用户授权"
          visible={this.state.showUserAuth}
          width={600}
          onCancel={() => {
            this.AuthForm.props.form.resetFields();
            this.setState({ showUserAuth: false });
          }}
          onOk={() => {
            this.AuthForm.props.form.validateFields((err, values) => {
              console.log(values);
            });
            this.AuthForm.props.form.resetFields();
            this.setState({ showUserAuth: false });
          }}
        >
          <FormAuth
            wrappedComponentRef={inst => {
              this.AuthForm = inst;
            }}
          />
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
        <Form.Item label="角色名称" {...formItemLayout}>
          {getFieldDecorator('role_name')(<Input type="text" />)}
        </Form.Item>
        <Form.Item label="状态" {...formItemLayout}>
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value={1}>启用</Radio>
              <Radio value={2}>停用</Radio>
            </Radio.Group>
          )}
        </Form.Item>
      </Form>
    );
  }
}

const FormRole = Form.create()(RoleForm);

class PrivilegeForm extends React.Component {
  renderTreeNodes = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <Tree.TreeNode title={item.title} key={item.key}>
            {this.renderTreeNodes(item.children)}
          </Tree.TreeNode>
        );
      } else {
        return <Tree.TreeNode title={item.title} key={item.key} />;
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    };
    return (
      <Form>
        <Form.Item label="角色名称" {...formItemLayout}>
          {getFieldDecorator('role_name')(<Input type="text" />)}
        </Form.Item>
        <Form.Item label="状态" {...formItemLayout}>
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value={1}>启用</Radio>
              <Radio value={2}>停用</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="平台权限" {...formItemLayout}>
          {getFieldDecorator('privilege')(
            <Tree checkable>{this.renderTreeNodes(menuList)}</Tree>
          )}
        </Form.Item>
      </Form>
    );
  }
}

const FormPrivilege = Form.create()(PrivilegeForm);

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetKeys: []
    };
  }
  handleChange = nextTargetKeys => {
    this.setState({ targetKeys: nextTargetKeys });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    };
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`
      });
    }
    return (
      <Form>
        <Form.Item label="角色名称" {...formItemLayout}>
          {getFieldDecorator('role_name')(<Input type="text" />)}
        </Form.Item>
        <Form.Item label="授权" {...formItemLayout}>
          {getFieldDecorator('auth')(
            <Transfer
              dataSource={mockData}
              targetKeys={this.state.targetKeys}
              titles={['待选用户', '已选用户']}
              render={item => item.title}
              onChange={this.handleChange}
              locale={{
                itemUnit: '项',
                itemsUnit: '项',
                notFoundContent: '列表为空',
                searchPlaceholder: '请输入搜索内容'
              }}
            />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const FormAuth = Form.create()(AuthForm);
