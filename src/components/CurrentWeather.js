import React, { Component } from 'react';
import WeatherIcon from "react-icons-weather";

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      temperature: '',
      wind: '',
      icon: "300"
    }
  }
  
  componentDidMount() {
    let city = this.props.city;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=2ce9c27bad816b51eb6943db06f0383f`)
    .then(results => {
      return results.json()
    }).then(data => {
      let currentWeather = data;
      console.log(currentWeather);
      this.setState({
        city: this.props.city,
        description: currentWeather.weather[0].description,
        temperature: currentWeather.main.temp,
        wind: currentWeather.wind.speed,
        icon: currentWeather.weather[0].id.toString()
      })
    })
  }

  render() {
    return (
      <div>
        <p>Location</p>
        <i class={this.state.icon}></i>
        <WeatherIcon name='owm' iconId={this.state.icon}/>
        <h2>{this.state.city}</h2>
        <p>WeatherDescription</p>
        <h2>{this.state.description}</h2>
        <p>Temperature</p>
        <h2>{this.state.temperature}&#8451;</h2>
        <p>Wind Speed</p>
        <h2>{this.state.wind} M/S</h2>
      </div>
    )
  }
}

export default CurrentWeather
