import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.maxCorrection = 30;

    this.state = {rolloutHeading: ''};

    var headings = ['030', '060', '090', '120', '150', '180', '210', '240', '270', '300', '330', '360', '0'];
    var i = parseInt(Math.random()*(headings.length-1));
    this.initialHeading = headings[i];

    var directions = ['LEFT', 'RIGHT', 'LEFT'];
    var i = parseInt(Math.random()*(directions.length -1));
    this.directionOfTurn = directions[i];

    var i = parseInt(Math.random()*(headings.length-1));
    this.desiredHeading = headings[i];

    this.correctRolloutHeading = '';
    this.rolloutHeading = '';

    var distanceFromNorth = Math.abs(360 - parseInt(this.desiredHeading));
    var distanceFromSouth = Math.abs(180 - parseInt(this.desiredHeading));
    var distanceFromEast = Math.abs(90 - parseInt(this.desiredHeading));
    var distanceFromWest = Math.abs(270 - parseInt(this.desiredHeading));

    if(distanceFromNorth <= distanceFromSouth) {
      if(distanceFromEast <= distanceFromWest) {
        var coefficient = Math.abs(distanceFromNorth - distanceFromEast) / 90;
        var magenticDipError = maxCorrection * coefficient;
      }
    }
    

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRolloutHeadingChange = this.handleRolloutHeadingChange.bind(this);

  }


  handleSubmit(event) {
  
    if(this.correctRolloutHeading == this.rolloutHeading) 
    {
      alert("Correct Answer!!!");
    }
    else
    {
      alert("Wrong Asnwer!. The correct answer is " + this.correctRolloutHeading);
    }
    event.preventDefault();
  }
  


  handleRolloutHeadingChange(event) {
    this.setState({rolloutHeading: event.target.value});
    this.rolloutHeading = event.target.value;
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Initial Heading:
          <input type="text" value={this.initialHeading}/>
        </label>
          <label>
          Direction Of Turn:
          <input type="text" value={this.directionOfTurn} onChange={this.handleDirectionOfTurnChange}/>
        </label>
        <label>
          Desired Heading:
          <input type="text" value={this.desiredHeading} onChange={this.handleDesiredHeadingChange}/>
        </label>
        <label>
          Rollout Heading:
          <input type="text" value={this.rolloutHeading} onChange={this.handleRolloutHeadingChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default App;
