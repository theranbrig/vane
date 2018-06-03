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
    apiKey: "AIzaSyAtymcvGVEattiDOSILXkveeABDWpsO40o",
    authDomain: "weather-app-8bad1.firebaseapp.com",
    databaseURL: "https://weather-app-8bad1.firebaseio.com",
    projectId: "weather-app-8bad1",
    storageBucket: "",
    messagingSenderId: "924881745386"
  };

firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCity: 'London',
      user: null,
      forecast: [],
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
    this.apiRequest();
  }

  componentDidMount() {
    this.apiRequest();
  }

  // Yahoo! Weather API request function

  apiRequest() {
    axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.state.activeCity}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
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
    this.setState({
      activeCity: '',
      anchorEl: null
    })
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

  // User sign in with google firebase

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

  // Create cookie to save information set as string -> array
  // Read cookie

  render() {
    return (
      <Grid container justify='center' alignItems='center' className={this.setTemperatureClass()} id='main'>
        <Grid item xs={12} md={8}>
          <ApplicationBar
            firebase={ firebase }
            signIn={ () => this.signIn() }
            signOut={ () => this.signOut() }
            currentUser={ this.state.user === null ? 'Guest' : this.state.user.displayName }
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
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
