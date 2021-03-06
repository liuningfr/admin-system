import React from 'react';
import { Select } from 'antd';

export default {
  formatDate: time => {
    if (!time) {
      return '';
    }
    const date = new Date(time);
    return `${date.getFullYear()}年${date.getMonth() +
      1}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  },
  pagination: (data, callback) => {
    return {
      onChange: current => {
        callback(current);
      },
      current: 1,
      pageSize: 5,
      total: 10
    };
  },
  getOptionList: data => {
    if (!data) return [];
    return data.map(item => (
      <Select.Option value={item.id} key={item.id}>
        {item.name}
      </Select.Option>
    ));
  }
};
