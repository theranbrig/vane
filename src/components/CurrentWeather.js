import React, { Component } from 'react';
import * as moment from "moment";

class CurrentWeather extends Component {
  render() {
    return (
      <div>
        <p>Location</p>
        <h1>{this.props.city}</h1>
        <i className={`wi wi-yahoo-${this.props.iconId} main-icon`}></i>
        <p>WeatherDescription</p>
        <h2>{this.props.description}</h2>
        <p>Temperature</p>
        <h2>{this.props.temp}&#8457;</h2>
        <p>Humidity</p>
        <h2>{this.props.humidity}</h2>
        <p>Last Update</p>
        <h2>{this.props.time}</h2>
      </div>
    )
  }
}

export default CurrentWeather
