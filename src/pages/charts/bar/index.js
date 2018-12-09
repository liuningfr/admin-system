import React from 'react';
import { Card } from 'antd';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import echartTheme from './../echartTheme';

class Bar extends React.Component {
  componentWillMount() {
    echarts.registerTheme('MyAntD', echartTheme);
  }
  getOption = () => {
    const option = {
      title: {
        text: '订单量统计'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单量',
          type: 'bar',
          data: [10, 20, 50, 40, 30, 25, 5]
        }
      ]
    };
    return option;
  };
  getOption2 = () => {
    const option = {
      title: {
        text: '订单量统计'
      },
      legend: {
        data: ['店铺一', '店铺二', '店铺三']
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '店铺一',
          type: 'bar',
          data: [10, 30, 70, 40, 30, 25, 50]
        },
        {
          name: '店铺二',
          type: 'bar',
          data: [10, 20, 50, 40, 30, 25, 5]
        },
        {
          name: '店铺三',
          type: 'bar',
          data: [40, 20, 70, 40, 40, 25, 35]
        }
      ]
    };
    return option;
  };
  render() {
    return (
      <div>
        <Card title="柱形图一">
          <ReactEcharts
            option={this.getOption()}
            theme="MyAntD"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="柱形图二">
          <ReactEcharts
            option={this.getOption2()}
            theme="MyAntD"
            style={{ height: 500 }}
          />
        </Card>
      </div>
    );
  }
}

export default Bar;
