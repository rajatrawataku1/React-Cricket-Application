import React, { Component } from 'react';
import './MainComponent.css';

import BallComponent from '../BallComponent/BallComponent.js';
import RunComponent from '../RunComponent/RunComponent.js';

class MainComponent extends Component {

  constructor(props){
    super(props);
    this.state = { runs: 18, balls: 6,validRunArray:[0,1,2,3,4,6]};
    this.play = this.play.bind(this);
  }

  play(){

    var index=Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    var temp_runs= this.state.validRunArray[index];
    this.setState({runs: this.state.runs - temp_runs, balls: this.state.balls-1 });
  }


  render(){
    const hstyle={
      textAlign: "center"
    }

    if(this.state.runs > 0 && this.state.balls >0 ){
      return(
        <div className="MainComponent">
          <h1 style={hstyle}> Cricket Match  </h1>
          <BallComponent className="BallComponent" balls={this.state.balls}/>
          <RunComponent className="RunComponent" runs={this.state.runs}/>
          <button className="PlayButton" onClick={this.play}> PLAY </button>
        </div>
      );
    }else{
      if(this.state.runs <=0){
          return(
            <div className="MainComponent">
              <h1 className="center"> You Won </h1>
            </div>
          )
      }else {
        return(
          <div className="MainComponent">
            <h1 className="center"> You Loose </h1>
          </div>
        )
      }
    }
  }
}
export default MainComponent;
