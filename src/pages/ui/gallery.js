import React from 'react';
import { Card, Row, Col, Modal } from 'antd';
import './ui.less';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      currentImg: ''
    };
  }
  openImg = img => {
    this.setState({
      visible: true,
      currentImg: img
    });
  };
  render() {
    const imgs = [
      ['1.png', '2.png', '3.png', '4.png', '5.png'],
      ['6.png', '7.png', '8.png', '9.png', '10.png'],
      ['11.png', '12.png', '13.png', '14.png', '15.png'],
      ['16.png', '17.png', '18.png', '19.png', '20.png'],
      ['21.png', '22.png', '23.png', '24.png', '25.png']
    ];
    const imgList = imgs.map(item =>
      item.map(i => (
        <Card
          hoverable
          key={i}
          cover={
            <img
              src={`/gallery/${i}`}
              alt={i}
              onClick={() => this.openImg(i)}
            />
          }
          style={{ marginBottom: 16 }}
        >
          <Card.Meta title={i} description="This is description." />
        </Card>
      ))
    );
    const { visible, currentImg } = this.state;
    return (
      <div>
        <Row gutter={16}>
          <Col md={5}>{imgList[0]}</Col>
          <Col md={5}>{imgList[1]}</Col>
          <Col md={5}>{imgList[2]}</Col>
          <Col md={5}>{imgList[3]}</Col>
          <Col md={4}>{imgList[4]}</Col>
        </Row>
        <Modal
          visible={visible}
          onCancel={() => this.setState({ visible: false })}
          title={currentImg}
          footer={null}
        >
          <img
            src={`/gallery/${currentImg}`}
            alt=""
            style={{ width: '100%' }}
          />
        </Modal>
      </div>
    );
  }
}

export default Gallery;
