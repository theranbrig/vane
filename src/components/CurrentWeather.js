import React, { Component } from 'react';

class CurrentWeather extends Component {
  render() {
    return (
      <div>
        <i className={`wi wi-yahoo-${this.props.iconId} main-icon`}></i>
        <h1>{this.props.city}</h1>
        <h2>{this.props.description}</h2>
        <h2>{this.props.temp}&#8457;</h2>
        <h2>{this.props.time}</h2>
      </div>
    )
  }
}

export default CurrentWeather
