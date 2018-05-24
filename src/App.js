import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import CurrentWeather from "./components/CurrentWeather";
import User from './components/User'

var config = {
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
      activeCity: 'Phuket',
      user: 'Steve'
    }
  }

  setUser(user) {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div>
        <User 
          firebase={firebase}
          setUser={this.setUser.bind(this)}
          user={this.state.user}
          currentUser={ this.state.user === null ? 'Guest' : this.state.user.displayName }
        />
        <CurrentWeather city={this.state.activeCity}/>
      </div>
    );
  }
}

export default App;
