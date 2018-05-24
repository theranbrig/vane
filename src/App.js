import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import CurrentWeather from "./components/CurrentWeather";
import User from './components/User'

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
