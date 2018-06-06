import React, { Component } from 'react';
import './BallComponent.css';

class BallComponent extends Component{
  render(){
    return(
        <div className="BallComponent">
          <h4 className="center"> Number of Balls Remaining </h4>
          <hr width="80%"/>
          <h1 className="center">{this.props.balls}</h1>
        </div>
    );
  }
}

export default BallComponent;
