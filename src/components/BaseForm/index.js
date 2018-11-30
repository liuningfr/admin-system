import React from 'react';
import { Form, Select, Button, DatePicker } from 'antd';
import utils from './../../utils/utils';

class BaseForm extends React.Component {
  initFormList = () => {
    const { getFieldDecorator } = this.props.form;
    const formList = this.props.formList;
    if (formList && formList.length > 0) {
      return formList.map(item => {
        if (item.type === 'select') {
          return (
            <Form.Item label={item.label}>
              {getFieldDecorator([item.field], {
                initialValue: item.initialValue
              })(
                <Select style={{ width: item.width }}>
                  {utils.getOptionList(item.list)}
                </Select>
              )}
            </Form.Item>
          );
        }
        if (item.type === 'datepicker') {
          return (
            <Form.Item label={item.label}>
              {getFieldDecorator([item.field])(
                <DatePicker
                  style={{ width: item.width }}
                  placeholder="请选择时间"
                />
              )}
            </Form.Item>
          );
        }
        return null;
      });
    }
  };
  render() {
    return (
      <Form layout="inline">
        {this.initFormList()}
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

export default Form.create()(BaseForm);
