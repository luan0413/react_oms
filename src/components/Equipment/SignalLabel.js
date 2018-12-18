import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class SignalLabel extends Component {
    constructor(props){
      super(props)
      this.state = {
        list: [
          {
            list:[{
              cate_id:"5ac0896ca880f20358495508",
              catename:"精选热菜",
              img_url:"upload/20180417/1523969206225.jpg",
              price:"2",
              title:"娃娃菜炖豆腐",
              _id:"5ac1a22011f48140d0002955",
            }, {
              cate_id:"5ac0896ca880f20358495508",
              catename:"精选热菜",
              img_url:"upload/20180417/1523969277382.jpg",
              price:"22",
              title:"香酥黄金鱼",
              _id:"5ac1eb591a6b2f48fcb06210",
            }, {
              cate_id:"5ac0896ca880f20358495508",
              catename:"精选热菜",
              img_url:"upload/20180417/1523969336562.jpg",
              price:"25",
              title:"猪肉白菜",
              _id:"5ac1f04bd1bef433a42614cd",
            }, {
              cate_id:"5ac0896ca880f20358495508",
              catename:"精选热菜",
              img_url:"upload/20180417/1523969600601.jpg",
              price:"21",
              title:"鲜蔬菌菇粥",
              _id:"5ad5ee4018644907b8dd58fa",
            }],
            pid:"0",
            title:"精选热菜",
            _id:"5ac0896ca880f20358495508",
          }
        ],
        domain:'http://a.itying.com/',
      }
    }
    componentDidMount(){
      let url = this.state.domain+'api/productlist';
      // console.log(url)
      axios.get(url)
      .then((response)=>{
        console.log(response.data.result);
        this.setState({
          list: response.data.result
        })
      }).catch((error)=>{
        console.log(error);
      })
    }
    render() {
        return (
          <div className = "SignalLabel" >
            <h2>通过路由传值</h2>
            <div className="list">
              {
                  this.state.list.map((value,key)=>{
                      return(
                          <div className="item" key={key}>
                              <h3 className="item_cate">{value.title}</h3>
                              <ul className="item_list">
                                  {
                                      value.list.map((v,k)=>{
                                          return(
                                              <li key={k}>
                                                <Link to={`/equipment/detail/${v._id}`}>
                                                      <div className="inner">
                                                          <img src={`${this.state.domain}${v.img_url}`} />
                                                          <p className="title">{v.title}</p>
                                                          <p className="price">{v.price}元</p>
                                                      </div>
                                                  </Link>
                                              </li>
                                          )
                                      })
                                  }
                              </ul>
                          </div>
                      )
                  })
              }


          </div>

            <h2>通过get传值</h2>
            <ul>
              {
                this.state.list.map((value,key)=>{
                  return <li key={key}><Link to={`/equipment/detailget/?aid=${value.aid}`}>{value.title}</Link></li>
                })
              }
            </ul>
          </div>
        )
    }
}
//to={`/equipment/signallabel/detail/${value.aid}`}
export default SignalLabel;
