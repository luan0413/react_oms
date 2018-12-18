import React, { Component } from 'react';
import url from 'url';

class DetailGet extends Component {
    constructor(props){
      super(props)
      this.state = {}
    }
    componentDidMount(){
      var query=url.parse(this.props.location.search,true).query;
      console.log(query)
    }
    render() {
        return (
          <div className = "DetailGet" >
            详情{url.parse(this.props.location.search,true).query.aid}
          </div>
        )
    }
}

export default DetailGet;
