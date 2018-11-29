import React from 'react';
import { Card } from 'antd';
import './detail.less';

class Order extends React.Component {
  componentDidMount() {
    this.renderMap();
  }
  renderMap = () => {
    this.map = new window.BMap.Map('orderDetailMap');
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
          <div id="orderDetailMap" className="order-map" />
          <div className="detail-items">
            <div className="item-title">基础信息</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">营运模式</div>
                <div className="detail-form-content">自营</div>
              </li>
              <li>
                <div className="detail-form-left">订单编号</div>
                <div className="detail-form-content">001345</div>
              </li>
            </ul>
          </div>
          <div className="detail-items">
            <div className="item-title">详细信息</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">营运模式</div>
                <div className="detail-form-content">自营</div>
              </li>
              <li>
                <div className="detail-form-left">订单编号</div>
                <div className="detail-form-content">001345</div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    );
  }
}

export default Order;
