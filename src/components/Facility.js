import React, { Component } from "react";

import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {
  Content, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class News extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  // <Header style={{ background: '#fff', padding: 0 }} />
  // <Footer style={{ textAlign: 'center' }}>
    // Ant Design ©2018 Created by Ant UED
  // </Footer>
  render(){
    return(
      <Layout style={{ minHeight: '90vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="sub1">
              <Icon type="home" />
              <span>首页</span>
            </Menu.Item>
            <SubMenu key="sub2" title={<span><Icon type="money-collect" /><span>资产管理</span></span>}>
              <SubMenu key="sub21" title="标志标牌">
                <Menu.Item key="sub211">标志标牌维护</Menu.Item>
                <Menu.Item key="sub212">标志标牌录入</Menu.Item>
                <Menu.Item key="sub213">标志标牌标注</Menu.Item>
                <Menu.Item key="sub214">标志标牌查询</Menu.Item>
              </SubMenu>
              <SubMenu key="sub22" title="隔离设施">
                <Menu.Item key="sub221">隔离设施维护</Menu.Item>
                <Menu.Item key="sub223">隔离设施标注</Menu.Item>
                <Menu.Item key="sub224">隔离设施查询</Menu.Item>
              </SubMenu>
              <SubMenu key="sub23" title="灯杆">
                <Menu.Item key="sub231">灯杆维护</Menu.Item>
                <Menu.Item key="sub233">灯杆标注</Menu.Item>
                <Menu.Item key="sub234">灯杆查询</Menu.Item>
              </SubMenu>
              <SubMenu key="sub24" title="标线">
                <Menu.Item key="sub241">标线查询</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="setting" /><span>统计分析</span></span>}>
              <SubMenu key="sub31" title="设施质量分析">
                <Menu.Item key="sub311">设施损毁情况分析</Menu.Item>
                <Menu.Item key="sub312">设施状态对比分析</Menu.Item>
                <Menu.Item key="sub313">设施维修原因对比分析</Menu.Item>
              </SubMenu>
              <SubMenu key="sub32" title="服务质量分析">
                <Menu.Item key="sub321">运维费用分析</Menu.Item>
                <Menu.Item key="sub322">运维效率分析</Menu.Item>
                <Menu.Item key="sub323">运维流程分析</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="tool" /><span>运维服务</span></span>}>
              <Menu.Item key="sub41">人工报修</Menu.Item>
              <Menu.Item key="sub42">报修处理</Menu.Item>
              <Menu.Item key="sub43">报修历史</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="desktop" /><span>设施巡检</span></span>}>
              <Menu.Item key="sub51">巡检路线维护</Menu.Item>
              <Menu.Item key="sub52">巡检工作记录</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>

        </Layout>
      </Layout>
    )
  }
}

export default News;
