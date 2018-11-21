import React from 'react';
import { Card, Table } from 'antd';
import axios from './../../axios';

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
    dataIndex: 'sex'
  },
  {
    title: '状态',
    dataIndex: 'state'
  },
  {
    title: '爱好',
    dataIndex: 'hobby'
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
      dataSource: []
    };
  }
  componentDidMount() {
    this.request();
  }
  request = () => {
    axios
      .ajax({
        url: '/table/list',
        data: {
          page: 1
        }
      })
      .then(res => {
        this.setState({ dataSource: res.data });
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
          />
        </Card>
      </div>
    );
  }
}

export default BasicTable;
