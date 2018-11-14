import React from 'react';
import { Menu } from 'antd';
import menuConfig from './../../config/menuConfig';
import './index.less';

const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: null,
    };
  }
  componentWillMount() {
    const menuTreeNode =  this.renderMenu(menuConfig);
    this.setState({ menuTreeNode });
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)} 
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          {item.title}
        </Menu.Item>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>My AntD</h1>
        </div>
        <Menu
          theme="dark" 
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default NavLeft;