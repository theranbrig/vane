import React, { Component } from 'react';
import mainLogo from "./assets/Untitled-1.png";
import './App.css';
import * as firebase from 'firebase';
import User from './components/User'
import axios from "axios";
import Forecast from './components/Forecast'
import SavedCities from "./components/SavedCities";
import CurrentWeather from "./components/CurrentWeather";
import { InputGroup, InputGroupAddon, Button, Input, Container, Collapse, Col, Row, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";


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
      activeCity: 'London',
      user: null,
      forecast: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  
  // App city search bar functions

  handleChange(e) {
    e.preventDefault();
    this.setState({
      activeCity: e.target.value,
    });
  }

  handleSubmit(e) {
    this.apiRequest();
  }

  componentDidMount() {
    this.apiRequest();
  }

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
        time: conditions.lastBuildDate,
        forecast: conditions.item.forecast
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

  // Menubar toggle
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  tempClass() {}
  render() {
    return (
      <Container className={this.setTemperatureClass()} id='main'>
        <Col>
        <Navbar className={this.setTemperatureClass()} light expand="md">
          <NavbarBrand>
            <img src={mainLogo} alt='main logo'/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className='main-logo'/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <InputGroup>
                  <Input placeholder='Search Location' type='text' onChange={this.handleChange} value={this.state.activeCity}/>
                  <InputGroupAddon onClick={this.handleSubmit} addonType="append"><Button outline color="secondary"><i className="fas fa-search"></i></Button></InputGroupAddon>
                </InputGroup>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Menu
                </DropdownToggle>
                <DropdownMenu right>
                  <SavedCities/>
                  <User 
                    firebase={ firebase }
                    setUser={this.setUser.bind(this)}
                    user={this.state.user}
                    currentUser={ this.state.user === null ? 'Guest' : this.state.user.displayName }
                  />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <CurrentWeather 
                city={this.state.cityName}
                temp={this.state.temp}
                iconId={this.state.iconId}
                description={this.state.description}
                time={this.state.time}
                humidity={this.state.humidity}
              />
            </Col>
          </Row>
          <Forecast
            forecast={this.state.forecast}
            tempClass={this.setTemperatureClass()}
          />
        </Col>
      </Container>
    );
  }
}

export default App;
