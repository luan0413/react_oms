import React, { Component } from 'react';
import { Table, Divider, Tag, Button, Input } from 'antd';
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';

const columns = [{
  title: 'ID',
  dataIndex: 'aid',
  key: 'aid',
},{
  title: 'dateline',
  dataIndex: 'dateline',
  key: 'dateline',
  render: text => <Tag color="blue">{text}</Tag>,
}, {
  title: '路径',
  dataIndex: 'pic',
  key: 'pic',
}, {
  title: '详情',
  dataIndex: 'title',
  key: 'title',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <Tag color="yellow">Invite {record.name}</Tag>
      <Divider type="vertical" />
      <Tag color="red">Delete</Tag>
    </span>
  ),
}];
const columnsUser = [{
  title: '代码类别',
  dataIndex: 'dmlb',
  key: 'dmlb',
},{
  title: '代码',
  dataIndex: 'dm',
  key: 'dm',
  render: text => <Tag color="blue">{text}</Tag>,
}, {
  title: '代码说明',
  dataIndex: 'dmsm',
  key: 'dmsm',
}, {
  title: '文中说明',
  dataIndex: 'dmsmsm',
  key: 'dmsmsm',
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
      <Tag color="yellow">Invite {record.name}</Tag>
      <Divider type="vertical" />
      <Tag color="red">Delete</Tag>
    </span>
  ),
}];

class EquipmentHome extends Component{
  constructor(props){
    super(props)
    this.state = {
      ListAxiosData: [],
      ListFetchJsonpData: [],
      dataSource: [],
      dataSourceUser: [],//getUsers
    }
  }
  getAxiosData = () => {
    let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';   //接口后台允许了跨域
    axios.get(api)
      .then((response) => {
        console.log(response.data.result);
        this.setState({
          ListAxiosData: response.data.result,
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getFetchJsonpData = () => {
    let api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
    fetchJsonp(api)
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({
          ListFetchJsonpData: json.result
        })
      }).catch(function(ex) {
        console.log(ex)
      })
  }
  componentWillMount(){
    let url = 'http://61.50.100.22:60000/bana_fvs/code/getCodes.do';//user/getUsers.do';//function/getFunctions.do'
    axios.post(url, {
      // gnbm: '01010000',
      // gnmc: '雾区监测',
      pageNum: 1,
      pageSize: 10
    })
    .then((response) => {
      console.log(response.data);
      this.setState({
        dataSourceUser: response.data.datas
      })
    })
    .catch(function (error) {
      console.log(error);
    });
    let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';   //接口后台允许了跨域
    axios.get(api)
      .then((response) => {
        // console.log(response.data.result);
        this.setState({
          dataSource: response.data.result,
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render(){
    return(
      <div className="EquipmentHome main">
        <div className="searchBox">
          <ul>
            <li className="searchList">
              <label>ID:</label>
              <Input placeholder="请输入" />
            </li>
            <li className="searchList">
              <label>dateline:</label>
              <Input placeholder="请输入" />
            </li>
            <li className="searchBtn">
            <Button type="primary" icon="search">查询</Button>
            </li>
          </ul>
        </div>
        <div className="btnBox">
          <Button type="primary" onClick={this.getAxiosData}>axios</Button>
          <Button type="primary" onClick={this.getFetchJsonpData} style={{marginLeft:'5px'}}>fetch-jsonp</Button>
          <div className="listBox" style={{background: '#fff',marginTop: '10px',overflow: 'auto'}}>
            <ul style={{float: 'left'}}>
              {
                this.state.ListAxiosData.map((value,key)=>{
                  return <li key={key}>{value.aid}</li>
                })
              }
            </ul>
            <ul style={{float: 'left',marginLeft: '20px'}}>
              {
                this.state.ListFetchJsonpData.map((value,key)=>{
                  return <li key={key}>{value.title}</li>
                })
              }
            </ul>
          </div>
        </div>
        <div className="gridBox">
          <Table dataSource={this.state.dataSource} columns={columns} rowKey="aid"/>
          <Table dataSource={this.state.dataSourceUser} columns={columnsUser} rowKey="dmsm"/>
        </div>
      </div>
    )
  }
}

export default EquipmentHome;
