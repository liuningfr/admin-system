import React from "react";
import { Row, Col } from "antd";
import dayjs from "dayjs";
import Axios from "./../../axios";
import "./index.less";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Leo",
      weather: ""
    };
  }
  componentWillMount() {
    this.getWeather();
  }
  getWeather = () => {
    Axios.jsonp({
      url:
        "https://restapi.amap.com/v3/weather/weatherInfo?key=054dfe6fdffb0dda5d67f861814cc194&city=110101"
    }).then(res => {
      if (res.status === "1") {
        const [{ weather }] = res.lives;
        this.setState({ weather });
      }
    });
  };

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.username}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">
              {dayjs().format("YYYY年MM月DD日 HH:mm:ss")}
            </span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
