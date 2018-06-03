import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import * as firebase from 'firebase';
import { Grid } from "@material-ui/core";
import Forecast from './components/Forecast'
import DetailedInfo from "./components/DetailedInfo";
import ApplicationBar from './components/ApplicationBar';
import CurrentWeather from "./components/CurrentWeather";


const config = {
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
      activeCity: 'Seoul',
      user: null,
      forecast: [],
      temperatureUnits: 'c'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Mount original city

  componentDidMount() {
    this.apiRequest();
  }

  // Yahoo! Weather API request function

  apiRequest() {
    const locationUrl = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20u%3D'${this.state.temperatureUnits}'%20and%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.state.activeCity}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
    axios.get(locationUrl)
    .then(result => {
      console.log(result.data.query.results.channel);
      const conditions = result.data.query.results.channel;
      console.log(conditions.item.forecast[0])
      this.setState({
        cityName: conditions.title.slice(17),
        temp: conditions.item.condition.temp,
        iconId: conditions.item.condition.code,
        description: conditions.item.condition.text,
        humidity: conditions.atmosphere.humidity,
        time: conditions.item.forecast[0].date,
        forecast: conditions.item.forecast,
        high: conditions.item.forecast[0].high,
        low: conditions.item.forecast[0].low,
        sunrise: conditions.astronomy.sunrise,
        sunset: conditions.astronomy.sunset,
        windSpeed: `${conditions.wind.speed} ${conditions.units.speed}`
      })
    });
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
    this.apiRequest();
  }

  // Set temperature class for color combos

  setTemperatureClass() {
    if (this.state.temp >= 100) {
      return 'boiling'
    } else if (this.state.temp < 100 && this.state.temp >= 85) {
      return 'hot'
    } else if (this.state.temp < 85 && this.state.temp >= 65) {
      return 'warm'
    } else if (this.state.temp < 65 && this.state.temp >= 50) {
      return 'perfect'
    } else if (this.state.temp < 50 && this.state.temp >= 32) {
      return 'cool'
    } else if (this.state.temp < 32) {
      return 'freezing'
    }
  }

  // User sign in with Google Firebase

  signIn() {
    console.log('clickSignIn')
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup( provider ).then((result) => {
        const user = result.user;
        this.setState({ user });
    });
  }

  // User sign out with google firebase

  signOut() {
    firebase.auth().signOut();
    this.setState({ user: null });
  }

  changeUnits() {
    this.state.temperatureUnits === 'f' ? this.setState({ temperatureUnits: 'c'} ) : this.setState({ temperatureUnits: 'f' }); 
    setTimeout(() => {
      this.apiRequest();
    }, 200);
  }

  // Create cookie to save information set as string -> array
  // Read cookie

  render() {
    return (
      <Grid container justify='center' alignItems='center' className={ this.setTemperatureClass() } id='main'>
        <Grid item xs={12} md={8}>
          <ApplicationBar
            firebase={ firebase }
            signIn={ () => this.signIn() }
            signOut={ () => this.signOut() }
            currentUser={ this.state.user === null ? 'Guest' : this.state.user.displayName }
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            handleUnits={ () => this.changeUnits() }
            units={this.state.temperatureUnits}
          />
          <CurrentWeather
            city={ this.state.cityName }
            temp={ this.state.temp }
            iconId={ this.state.iconId }
            description={ this.state.description }
          />
          <Forecast
            forecast={ this.state.forecast }
            tempClass={ this.setTemperatureClass() }
          />
          <DetailedInfo
            high={ this.state.high }
            low={ this.state.low }
            sunrise={ this.state.sunrise }
            sunset={ this.state.sunset }
            windSpeed={ this.state.windSpeed }
            humidity={ this.state.humidity }
            time={ this.state.time }
          />
        </Grid>
      </Grid>
    );
  }
}

export default App;
