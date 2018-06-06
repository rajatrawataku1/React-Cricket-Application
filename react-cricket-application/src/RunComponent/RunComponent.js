import React, { Component } from 'react';
import './RunComponent.css';

class RunComponent extends Component{
  render(){
    return(
      <div className="RunComponent">
        <h4 className="center"> Number of Runs Remaining </h4>
        <hr width="80%"/>
        <h1 className="center">{this.props.runs}</h1>
      </div>
    )
  }
}

export default RunComponent;
