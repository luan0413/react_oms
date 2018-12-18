
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Icon } from 'antd';

import EquipmentHome from './Equipment/EquipmentHome';
import SignalSafeguard from './Equipment/SignalSafeguard';
import SignalLabel from './Equipment/SignalLabel';
import Detail from './Equipment/Detail';
import DetailGet from './Equipment/DetailGet';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class Equipment extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  handleClick(e) {
    console.log('click', e);
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return(
      <Router>
        <div className="Equipment">
          <div className="leftMenu">
            <Menu onClick={this.handleClick} style={{ width: 200 }} mode="vertical">
              <SubMenu key="sub1" title={<span><Icon type="home" /><span><Link to="/equipment/equipmenthome">首页</Link></span></span>}>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="money-collect" /><span>资产管理</span></span>}>
                <SubMenu key="sub21" title="信号">
                  <Menu.Item key="1"><Link to="/">设备维护</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/equipment/signallabel">设备标注</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub22" title="卡口">
                  <Menu.Item key="3">设备维护</Menu.Item>
                  <Menu.Item key="4">设备标注</Menu.Item>
                </SubMenu>
                <SubMenu key="sub23" title="视频">
                  <Menu.Item key="5">设备维护</Menu.Item>
                  <Menu.Item key="6">设备标注</Menu.Item>
                </SubMenu>
                <SubMenu key="sub24" title="诱导屏">
                  <Menu.Item key="7">设备维护</Menu.Item>
                  <Menu.Item key="8">设备标注</Menu.Item>
                </SubMenu>
                <SubMenu key="sub25" title="检测器">
                  <Menu.Item key="9">设备维护</Menu.Item>
                  <Menu.Item key="10">设备标注</Menu.Item>
                </SubMenu>
                <SubMenu key="sub26" title="运维一体机">
                  <Menu.Item key="11">设备维护</Menu.Item>
                  <Menu.Item key="12">设备标注</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="desktop" /><span>集中监测</span></span>}>
                <Menu.Item key="sub31">设备监测</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>统计分析</span></span>}>
                <SubMenu key="sub41" title="设备质量分析">
                  <Menu.Item key="sub411">设备故障趋势分析</Menu.Item>
                  <Menu.Item key="sub412">设备状态对比分析</Menu.Item>
                  <Menu.Item key="sub413">设备故障原因对比分析</Menu.Item>
                  <Menu.Item key="sub414">设备运行情况分析</Menu.Item>
                </SubMenu>
                <SubMenu key="sub42" title="服务质量分析">
                  <Menu.Item key="sub421">运维费用分析</Menu.Item>
                  <Menu.Item key="sub422">运维效率分析</Menu.Item>
                  <Menu.Item key="sub423">运维流程分析</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub5" title={<span><Icon type="tool" /><span>运维服务</span></span>}>
                <Menu.Item key="sub51">人工报障</Menu.Item>
                <Menu.Item key="sub52">报障处理</Menu.Item>
                <Menu.Item key="sub53">报障历史</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className="content">{/*{`${this.props.match.url}/`}*/}
            <Route path='/equipment/equipmenthome' component={EquipmentHome} />
            <Route exact path="/" component={SignalSafeguard} />
            <Route path="/equipment/signallabel" component={SignalLabel} />
            <Route path='/equipment/detail/:id' component={Detail} />
            <Route path='/equipment/detailget' component={DetailGet} />
          </div>
        </div>
      </Router>
    )
  }
}

export default Equipment;
