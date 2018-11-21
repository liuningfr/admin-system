import React from 'react';
import {
  Card,
  Form,
  Input,
  TimePicker,
  Icon,
  Radio,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  Upload,
  Checkbox,
  Button
} from 'antd';
import moment from 'moment';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ''
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
      }
    });
  };
  handleReset = e => {
    e.preventDefault();
    this.props.form.resetFields();
  };
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
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
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
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
            <Form.Item label="是否已婚" {...FormItemLayout}>
              {getFieldDecorator('married', {
                valuePropName: 'checked',
                initialValue: true
              })(<Switch />)}
            </Form.Item>
            <Form.Item label="生日" {...FormItemLayout}>
              {getFieldDecorator('birth', {
                initialValue: moment(new Date())
              })(<DatePicker format="YYYY-MM-DD" placeholder="请选择日期" />)}
            </Form.Item>
            <Form.Item label="时间" {...FormItemLayout}>
              {getFieldDecorator('time', {
                initialValue: moment(new Date())
              })(<TimePicker placeholder="请选择时间" />)}
            </Form.Item>
            <Form.Item label="备注" {...FormItemLayout}>
              {getFieldDecorator('remarks', {
                initialValue: ''
              })(<Input.TextArea autosize={{ minRows: 4, maxRows: 6 }} />)}
            </Form.Item>
            <Form.Item label="头像" {...FormItemLayout}>
              {getFieldDecorator('avatar', {
                initialValue: ''
              })(
                <Upload
                  listType="picture-card"
                  action="//jsonplaceholder.typicode.com/posts/"
                  onChange={this.handleChange}
                >
                  {this.state.imageUrl ? (
                    <img src={this.state.imageUrl} alt="" />
                  ) : (
                    <Icon type="plus" />
                  )}
                </Upload>
              )}
            </Form.Item>
            <Form.Item {...offsetLayout}>
              {getFieldDecorator('agree', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>我已阅读该协议</Checkbox>)}
            </Form.Item>
            <Form.Item {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>
                注册
              </Button>
              <Button onClick={this.handleReset}>重置</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Register);
