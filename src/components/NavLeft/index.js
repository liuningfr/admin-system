import React from 'react';
import { Menu } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import menuConfig from './../../config/menuConfig';
import { switchMenu } from './../../redux/action';
import './index.less';

const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: null,
      currentKey: window.location.hash.replace(/#|\?.*$/g, '')
    };
  }
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig);
    this.setState({ menuTreeNode });
  }

  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };
  handleClick = item => {
    const { dispatch } = this.props;
    dispatch(switchMenu(item.item.props.title));
    this.setState({ currentKey: item.key });
  };
  render() {
    return (
      <div>
        <div className="logo">
          <Link to="/">
            <img src="/assets/logo-ant.svg" alt="" />
            <h1>My AntD</h1>
          </Link>
        </div>
        <Menu
          theme="dark"
          selectedKeys={[this.state.currentKey]}
          onClick={this.handleClick}
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default connect()(NavLeft);
