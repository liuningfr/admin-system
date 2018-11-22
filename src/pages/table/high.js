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
    width: 80,
    dataIndex: 'id'
  },
  {
    title: '用户名',
    width: 80,
    dataIndex: 'username'
  },
  {
    title: '性别',
    width: 80,
    dataIndex: 'sex',
    render: text => (text === 1 ? '男' : '女')
  },
  {
    title: '状态',
    width: 80,
    dataIndex: 'state',
    render: text => states[text]
  },
  {
    title: '爱好',
    width: 80,
    dataIndex: 'hobby',
    render: text => {
      return text.map(item => hobbies[item]).join(', ');
    }
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  }
];
const columns2 = [
  {
    title: 'id',
    width: 80,
    fixed: 'left',
    dataIndex: 'id'
  },
  {
    title: '用户名',
    fixed: 'left',
    width: 80,
    dataIndex: 'username'
  },
  {
    title: '性别',
    width: 80,
    dataIndex: 'sex',
    render: text => (text === 1 ? '男' : '女')
  },
  {
    title: '状态',
    width: 80,
    dataIndex: 'state',
    render: text => states[text]
  },
  {
    title: '爱好',
    width: 80,
    dataIndex: 'hobby',
    render: text => {
      return text.map(item => hobbies[item]).join(', ');
    }
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    width: 80,
    dataIndex: 'birth'
  },
  {
    title: '生日',
    fixed: 'right',
    width: 80,
    dataIndex: 'birth'
  }
];

class HighTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      selectedRowKeys: [],
      selectedItem: null,
      selectedIds: [],
      current: 1
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
    const rowCheckSelection = {
      type: 'check',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys,
          selectedIds: selectedRows.map(item => item.id)
        });
      }
    };
    return (
      <div>
        <Card title="头部固定表格">
          <Table
            rowKey="id"
            bordered
            pagination={{ pageSize: 5 }}
            columns={columns}
            dataSource={this.state.dataSource}
            scroll={{ y: 240 }}
          />
        </Card>
        <Card title="左侧固定表格">
          <Table
            rowKey="id"
            bordered
            pagination={{ pageSize: 5 }}
            columns={columns2}
            dataSource={this.state.dataSource}
            scroll={{ x: 1700 }}
          />
        </Card>
        <Card title="分页表格">
          <Table
            rowKey="id"
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            rowSelection={rowCheckSelection}
            pagination={{
              current: this.state.current,
              pageSize: 5,
              total: 10,
              onChange: page => this.setState({ current: page })
            }}
          />
        </Card>
      </div>
    );
  }
}

export default HighTable;
