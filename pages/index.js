import React,{Component} from 'react';
import Router from "next/router";

class IndexPage extends Component {
  componentDidMount() {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("/dashboard");
    }
  }
  render(){
    return(
      <h1>Loding...</h1>
    );
  }
}

export default IndexPage; 
