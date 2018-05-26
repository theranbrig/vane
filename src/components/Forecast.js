import React, { Component } from 'react';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempClass: ''
    }
  }
  
  
  setForcastClass() {
    return `${this.props.tempClass}-forecast`
  }

  render() {
    return (
      <div className={`forecast ${this.setForcastClass()}`}>
        <h2>Forecast Goes Here!</h2>
        <ul>
          {
            this.props.forecast.map( (day, index) => 
              <div key={index}>
                <p>{day.day} - {day.date}</p>
                <i className={`wi wi-yahoo-${day.code}`}></i>
                <p>{day.text}</p>
                <p>Hi - {day.high}&#8457; Lo - {day.low}&#8457;</p>
                <br/>
              </div>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Forecast;