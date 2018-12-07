import React from 'react';
import { Card } from 'antd';
import BaseForm from './../../components/BaseForm';

const formList = [
  {
    type: 'select',
    label: '城市',
    field: 'city_id',
    initialValue: 0,
    width: 120,
    list: [
      { id: 0, name: '全部' },
      { id: 1, name: '北京' },
      { id: 2, name: '上海' }
    ]
  },
  {
    type: 'select',
    label: '营运模式',
    field: 'op_mode',
    initialValue: 0,
    width: 120,
    list: [
      { id: 0, name: '全部' },
      { id: 1, name: '自营' },
      { id: 2, name: '加盟' }
    ]
  },
  {
    type: 'datepicker',
    label: '下单时间',
    field: 'time',
    width: 280
  }
];

class Map extends React.Component {
  componentDidMount() {
    this.renderMap();
  }
  renderMap = () => {
    this.map = new window.BMap.Map('map-container');
    this.map.centerAndZoom('北京');
    this.addMapControl();
  };
  addMapControl = () => {
    const map = this.map;
    map.addControl(new window.BMap.ScaleControl());
    map.addControl(new window.BMap.NavigationControl());
  };
  render() {
    return (
      <div>
        <Card>
          <BaseForm formList={formList} />
        </Card>
        <Card>
          <div>共100辆车</div>
          <div id="map-container" style={{ height: 500, marginTop: 10 }} />
        </Card>
      </div>
    );
  }
}

export default Map;
