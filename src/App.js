import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import User from './components/User'
import axios from "axios";
import CurrentWeather from "./components/CurrentWeather";


var config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCity: 'London',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // App city search bar functions

  handleChange(e) {
    e.preventDefault();
    this.setState({
      activeCity: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.state.activeCity}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
    .then(result => {
      console.log(result);
      console.log(result.data.query.results.channel);
      const conditions = result.data.query.results.channel;
      this.setState({
        cityName: conditions.title.slice(17),
        temp: conditions.item.condition.temp,
        iconId: conditions.item.condition.code,
        description: conditions.item.condition.text,
        humidity: conditions.atmosphere.humidity,
        time: conditions.item.condition.date
      })
  });
    this.setState({
      activeCity: ''
    })
  }

  setUser(user) {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div>
        {/* <User 
          firebase={firebase}
          setUser={this.setUser.bind(this)}
          user={this.state.user}
          currentUser={ this.state.user === null ? 'Guest' : this.state.user.displayName }
        /> */}
        <div>
          <input type='text' onChange={this.handleChange} value={this.state.activeCity}/>
          <button type='submit' onClick={this.handleSubmit}>Search Weather</button>
          <p>New Location: {this.state.activeCity} </p>
         </div>
        <CurrentWeather 
          city={this.state.cityName}
          temp={this.state.temp}
          iconId={this.state.iconId}
          description={this.state.description}
          time={this.state.time}
          humidity={this.state.humidity}
        />
      </div>
    );
  }
}

export default App;
