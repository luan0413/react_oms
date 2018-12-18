import React, { Component } from 'react';
import { Table, Divider, Tag, Button, Input, Modal } from 'antd';
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';

class SignalSafeguard extends Component{
  constructor(props){
    super(props)
    this.state = {
      ListAxiosData: [],
      ListFetchJsonpData: [],
      visible: false,
      loading: false,
      title: "编辑",
      columns : [{
        title: '设备编号',
        dataIndex: 'sbbh',
        key: 'sbbh',
      },{
        title: '设备名称',
        dataIndex: 'sbmc',
        key: 'sbmc',
      }, {
        title: '设备型号',
        dataIndex: 'sbxh',
        key: 'sbxh',
      }, {
        title: 'IP地址',
        dataIndex: 'ipdz',
        key: 'ipdz',
      }, {
        title: '端口号',
        dataIndex: 'dk',
        key: 'dk',
      },{
        title: '安装时间',
        dataIndex: 'azrqsm',
        key: 'azrqsm',
      },{
        title: '管理机构',
        dataIndex: 'jgmc',
        key: 'jgmc',
      },{
        title: '制造商',
        dataIndex: 'zzssm',
        key: 'zzssm',
      },{
        title: '供应商',
        dataIndex: 'gyssm',
        key: 'gyssm',
      },{
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Tag color="green" onClick={this.showModal}>Update</Tag>
            <Divider type="vertical" />
            <Tag color="red" onClick={this.showDeleteConfirm}>Delete</Tag>
          </span>
        ),
      }],

      // dataSource: [],//getUsers
      dataSource: [
        {
          azdd:null,
          azrq:"2018-10-17",
          azrqsm:"2018-10-17",
          bz:null,
          children:null,
          cjs:1,
          cjssm:"百纳友为",
          dk:8100,
          files:[
            {
              fileName:"20181114092926638.jpg",
              id:"000100000307",
              name:"074517lRA.jpg"
            }
          ],
          gddwlxfs:null,
          gddwmc:null,
          gljg:52,
          gys:1,
          gyssm:"百纳友为",
          id:"000100000307",
          ipdz:"10.1.1.194",
          item:[{
            dzbm:6,
            dzfx:1,
            dzfxsm:"东",
            xhbm:307,
          }],
          jgmc:"上街大队",
          key:307,
          leaf:true,
          name:"信号194",
          qdfs:3,
          qdfssm:"信号灯",
          sbbh:"001",
          sbbm:307,
          sblx:1,
          sblxsm:"信号",
          sbmc:"信号194",
          sbxh:"XH01",
          sbzt:1,
          sbztsm:"正常",
          sfbz:2,
          sfbzsm:"已标注",
          shape:"POINT(12647081.968740754 4132444.921471809)",
          txfs:0,
          txfssm:null,
          txyys:0,
          txyyssm:null,
          type:1,
          wbgs:1,
          wbgslxdh:"15215236253",
          wbgslxr:"何志远",
          wbgssm:"百纳友为",
          ysrq:null,
          ysrqsm:null,
          zbrq:null,
          zbrqsm:null,
          zzs:1,
          zzssm:"百纳友为",
        }
      ],
    }
  }
  /* {record.name} */
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
  componentDidMount(){
    // let url = 'http://61.50.100.22:60000/bana_fvs/code/getCodes.do';//user/getUsers.do';//function/getFunctions.do'
    let url = 'http://10.1.1.109:8080/bana_oms/device/getDevices.do';//读取设备
    axios.post(url, {
      // gnbm: '01010000',
      // gnmc: '雾区监测',
      token: 'YWRtaW58MHy53MDt1LF8MTgwMTIzNDU2Nzh8MHzWo9bdytC5q7Cyvta9u82ovq%2By7NanttN8MTU0NDUwOTc4MjkxNw%3D%3D',
      data: {
        pageNum: 1,
        pageSize: 10,
      }
    })
    .then((response) => {
      console.log(response.data);
      this.setState({
        dataSource: response.data.datas
      })

    })
    .catch(function (error) {
      console.log(error);
    });

  }
  //打开弹窗
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  //弹窗确定
  handleOk = (e) => {
    console.log(e);
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  //弹窗取消
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  //grid 删除
  showDeleteConfirm = (e) => {
    Modal.confirm({
      title: '提示',
      content: '是否确定删除？',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  render(){
    return(
      <div className="SignalSafeguard main">
        <div className="searchBox">
          <ul>
            <li className="searchList">
              <label>设备编号:</label>
              <Input placeholder="请输入" />
            </li>
            <li className="searchList">
              <label>设备名称:</label>
              <Input placeholder="请输入" />
            </li>
            <li className="searchList">
              <label>管理机构:</label>
              <Input placeholder="请输入" />
            </li>
            <li className="searchBtn">
            <Button type="primary" icon="reload">重置</Button>
            <Button type="primary" icon="search" style={{marginLeft:'5px'}}>查询</Button>
            </li>
          </ul>
        </div>
        <div className="btnBox">
          <Button type="primary" onClick={this.getAxiosData} style={{marginLeft:'5px'}}>axios</Button>
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
          <Table dataSource={this.state.dataSource} columns={this.state.columns} rowKey="sbbh"/>
        </div>
        <Modal title={this.state.title} visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
          width={1000}
          centered
          footer={[
            <Button key="back" onClick={this.handleCancel}>取消</Button>,
            <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>确定(3s关闭)</Button>,
          ]}>
          <div className="basicInfoBox infoBox">
            <div className="infoBoxTitle">基本信息</div>
          </div>
          <div className="installInfoBox infoBox">
            <div className="infoBoxTitle">安装信息</div>
          </div>
          <div className="maintenanceInfoBox infoBox">
            <div className="infoBoxTitle">维保信息</div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default SignalSafeguard;
