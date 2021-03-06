import React from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd';

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${values.username} 你好`);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <Form.Item>
              <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="请输入密码"
                autoComplete="new-password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary">登录</Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="登录水平表单">
          <Form style={{ width: 300 }}>
            <Form.Item>
              {getFieldDecorator('username', {
                initialValue: '',
                rules: [
                  { required: true, message: '用户名不能为空' },
                  { min: 5, max: 10, message: '长度为5到10' }
                ]
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="请输入用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                initialValue: ''
              })(
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder="请输入密码"
                  autoComplete="new-password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>记住密码</Checkbox>)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Login);
