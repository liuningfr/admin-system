import React from 'react';
import { Table } from 'antd';

class BaseTable extends React.Component {
  render() {
    const { columns, dataSource } = this.props;
    return <Table bordered columns={columns} dataSource={dataSource} />;
  }
}

export default BaseTable;
