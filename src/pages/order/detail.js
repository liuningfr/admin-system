import React from 'react';
import { Card } from 'antd';
import './detail.less';

class Order extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <div id="orderDetailMap" />
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
