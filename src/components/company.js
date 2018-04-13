import React, { Component } from 'react'
import { Tabs } from 'antd'
import Base from '../containers/base'
import CreditCard from '../containers/creditCards'
const TabPane = Tabs.TabPane

class Company extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Base Information" key="1">
          <Base />
        </TabPane>
        <TabPane tab="Credit Cards" key="2">
          <CreditCard />
        </TabPane>
        <TabPane tab="UDIDs" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    )
  }
}

export default Company
