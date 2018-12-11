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
          type: 'line',
          data: [
            {
              name: '周一',
              value: 10
            },
            {
              name: '周二',
              value: 20
            },
            {
              name: '周三',
              value: 5
            },
            {
              name: '周四',
              value: 30
            },
            {
              name: '周五',
              value: 25
            },
            {
              name: '周六',
              value: 40
            },
            {
              name: '周日',
              value: 10
            }
          ]
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
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['店铺一', '店铺二']
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
          type: 'line',
          data: [
            {
              name: '周一',
              value: 10
            },
            {
              name: '周二',
              value: 20
            },
            {
              name: '周三',
              value: 5
            },
            {
              name: '周四',
              value: 30
            },
            {
              name: '周五',
              value: 25
            },
            {
              name: '周六',
              value: 40
            },
            {
              name: '周日',
              value: 10
            }
          ]
        },
        {
          name: '店铺二',
          type: 'line',
          data: [
            {
              name: '周一',
              value: 20
            },
            {
              name: '周二',
              value: 25
            },
            {
              name: '周三',
              value: 10
            },
            {
              name: '周四',
              value: 20
            },
            {
              name: '周五',
              value: 10
            },
            {
              name: '周六',
              value: 35
            },
            {
              name: '周日',
              value: 40
            }
          ]
        }
      ]
    };
    return option;
  };
  getOption3 = () => {
    const option = {
      title: {
        text: '订单量统计'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单量',
          type: 'line',
          areaStyle: {},
          data: [
            {
              name: '周一',
              value: 10
            },
            {
              name: '周二',
              value: 20
            },
            {
              name: '周三',
              value: 5
            },
            {
              name: '周四',
              value: 30
            },
            {
              name: '周五',
              value: 25
            },
            {
              name: '周六',
              value: 40
            },
            {
              name: '周日',
              value: 10
            }
          ]
        }
      ]
    };
    return option;
  };
  render() {
    return (
      <div>
        <Card title="折线图一">
          <ReactEcharts
            option={this.getOption()}
            theme="MyAntD"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="折线图二">
          <ReactEcharts
            option={this.getOption2()}
            theme="MyAntD"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="折线图三">
          <ReactEcharts
            option={this.getOption3()}
            theme="MyAntD"
            style={{ height: 500 }}
          />
        </Card>
      </div>
    );
  }
}

export default Bar;
