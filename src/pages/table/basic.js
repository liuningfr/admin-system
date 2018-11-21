import React from 'react';
import { Card, Table } from 'antd';
import axios from './../../axios';

const states = {
  1: '状态一',
  2: '状态二'
};
const hobbies = {
  1: '音乐',
  2: '运动'
};
const columns = [
  {
    title: 'id',
    dataIndex: 'id'
  },
  {
    title: '用户名',
    dataIndex: 'username'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    render: text => (text === 1 ? '男' : '女')
  },
  {
    title: '状态',
    dataIndex: 'state',
    render: text => states[text]
  },
  {
    title: '爱好',
    dataIndex: 'hobby',
    render: text => {
      return text.map(item => hobbies[item]).join(', ');
    }
  },
  {
    title: '生日',
    dataIndex: 'birth'
  }
];
class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      selectedRowKeys: [],
      selectedItem: null
    };
  }
  componentDidMount() {
    this.request();
  }
  request = () => {
    axios
      .ajax({
        url: '/table/list',
        method: 'get',
        params: {
          page: 1
        }
      })
      .then(res => {
        this.setState({ dataSource: res.data });
      });
  };
  onRowClick = (record, index) => {
    this.setState({
      selectedRowKeys: [index],
      selectedItem: record
    });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    };
    return (
      <div>
        <Card title="Easy Mock 数据表格">
          <Table
            rowKey="id"
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
          />
        </Card>
        <Card title="单选表格">
          <Table
            rowKey="id"
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }
              };
            }}
          />
        </Card>
      </div>
    );
  }
}

export default BasicTable;
