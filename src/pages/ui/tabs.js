import React from 'react';
import { Card, Tabs as Tab, Icon } from 'antd';
import './ui.less';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panes: [
        {
          title: 'Tab1',
          content: 'Tab1',
          key: '1'
        },
        {
          title: 'Tab2',
          content: 'Tab2',
          key: '2'
        },
        {
          title: 'Tab3',
          content: 'Tab3',
          key: '3'
        }
      ],
      activeKey: '1',
      newTabIndex: 0
    };
  }
  onChange = activeKey => {
    this.setState({ activeKey });
  };
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  add = () => {
    const { panes, newTabIndex } = this.state;
    const activeKey = `newTab${newTabIndex}`;
    this.setState({ newTabIndex: newTabIndex + 1 });
    panes.push({
      title: activeKey,
      content: 'Content of new Tab',
      key: activeKey
    });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  };
  render() {
    return (
      <div>
        <Card title="Tab页签">
          <Tab defaultActiveKey="1">
            <Tab.TabPane
              tab={
                <span>
                  <Icon type="plus" />
                  Tab 1
                </span>
              }
              key="1"
            >
              Content of Tab Pane 1
            </Tab.TabPane>
            <Tab.TabPane
              tab={
                <span>
                  <Icon type="edit" />
                  Tab 1
                </span>
              }
              key="2"
            >
              Content of Tab Pane 2
            </Tab.TabPane>
            <Tab.TabPane
              tab={
                <span>
                  <Icon type="delete" />
                  Tab 1
                </span>
              }
              key="3"
            >
              Content of Tab Pane 3
            </Tab.TabPane>
          </Tab>
        </Card>
        <Card title="可变Tab页签">
          <Tab
            defaultActiveKey="1"
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
            onChange={this.onChange}
          >
            {this.state.panes.map(item => {
              return (
                <Tab.TabPane tab={item.title} key={item.key}>
                  {item.content}
                </Tab.TabPane>
              );
            })}
          </Tab>
        </Card>
      </div>
    );
  }
}

export default Tabs;
