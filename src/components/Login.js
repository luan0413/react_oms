import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      loginFlag: false,
    }
  }
  login = (e) => {
    e.preventDefault();//阻止默认行为
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    if(username == "admin" && password == "123456"){
      // alert('登陆成功')
      this.setState({
        loginFlag: true,
      })
    }else{
      alert('登录失败');
    }

  }
  render(){
    // console.log(this.state.loginFlag)
    if(this.state.loginFlag){
      return <Redirect to='/' />
    }
    return(
      <div>
        <form onSubmit={this.login} className="loginBox">
          <br /><br /><br />
          <input type="text" ref="username" className="text" /><br /><br />
          <input type="password" ref="password" className="text" /><br /><br />
          <input type="submit" value="登录" className="btn" />
        </form>
      </div>
    )
  }
}

export default Login;
