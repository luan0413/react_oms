import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Detail extends Component {
    constructor(props){
      super(props)
      this.state = {
        list: [
          {
            cate_id:"5ac0896ca880f20358495508",
            catename:"精选热菜",
            content:"<p>香酥黄金鱼</p>",
            description:"这是商品描述",
            img_url:"upload/20180417/1523969277382.jpg",
            is_best:"1",
            is_hot:"1",
            num:"1",
            price:"22",
            product_bar_code:"324235",
            shop_id:0,
            sort:"",
            status:"1",
            title:"香酥黄金鱼",
            type:"2",
            _id:"5ac1eb591a6b2f48fcb06210",

          }
        ],
        domain:'http://a.itying.com/',
      }
    }
    componentDidMount(){
      console.log(this.props.match.params)
      let id = this.props.match.params.id
      let url = this.state.domain+'api/productcontent?id='+id;
      console.log(url)
      axios.get(url)
      .then((response)=>{
        console.log(response.data.result);
        this.setState({
          list: response.data.result[0]
        })
      }).catch((error)=>{
        console.log(error);
      })
    }
    render() {
        return (
          <div className="pcontent">
              <div className="back">  <Link to='/equipment/signallabel'>返回</Link></div>
              <div className="p_content">
                  <div className="p_info">
                        <img src={`${this.state.domain}${this.state.list.img_url}`} />
                        <h2>{this.state.list.title}</h2>
                        <p className="price">{this.state.list.price}/份</p>
                  </div>
                  <div className="p_detial">
                      <h3>
                          商品详情
                      </h3>
                      <div className="p_content"  dangerouslySetInnerHTML={{__html: this.state.list.content}}>
                      </div>
                  </div>
              </div>
              <footer className="pfooter">
                  <div className="cart">
                      <strong>数量:</strong>
                      <div className="cart_num">
                      <div className="input_left">-</div>
                      <div className="input_center">
                          <input type="text"  readOnly="readonly" value="1" name="num" id="num" />
                      </div>
                      <div className="input_right">+</div>
                      </div>
                  </div>
                  <button className="addcart">加入购物车</button>
              </footer>
            </div>
        )
    }
}

export default Detail;
