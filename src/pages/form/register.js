import React from 'react';
import {
  Card,
  Form,
  Input,
  Button,
  message,
  Icon,
  Radio,
  InputNumber,
  Select
} from 'antd';

class Register extends React.Component {
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
    const FormItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    };
    return (
      <div>
        <Card title="注册表单">
          <Form>
            <Form.Item label="用户名" {...FormItemLayout}>
              {getFieldDecorator('username', {
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
            <Form.Item label="密码" {...FormItemLayout}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '密码不能为空' }]
              })(
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder="请输入密码"
                  autoComplete="new-password"
                />
              )}
            </Form.Item>
            <Form.Item label="性别" {...FormItemLayout}>
              {getFieldDecorator('sex', {
                initialValue: 1
              })(
                <Radio.Group>
                  <Radio value={1}>男</Radio>
                  <Radio value={2}>女</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item label="年龄" {...FormItemLayout}>
              {getFieldDecorator('age', {
                initialValue: 18
              })(<InputNumber />)}
            </Form.Item>
            <Form.Item label="当前状态" {...FormItemLayout}>
              {getFieldDecorator('state', {
                initialValue: 1
              })(
                <Select>
                  <Select.Option value={1}>状态1</Select.Option>
                  <Select.Option value={2}>状态2</Select.Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="爱好" {...FormItemLayout}>
              {getFieldDecorator('hobby', {
                initialValue: [1, 2]
              })(
                <Select mode="multiple">
                  <Select.Option value={1}>音乐</Select.Option>
                  <Select.Option value={2}>运动</Select.Option>
                </Select>
              )}
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Register);
