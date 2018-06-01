import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

class CurrentWeather extends Component {
  render() {
    return (
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <div>
            <div className='big-data'>
              <i className={`wi wi-yahoo-${this.props.iconId} main-icon`}></i>
              <h2>{this.props.temp}&deg;</h2>
            </div>
            <h2 className='main-description'>{this.props.description}</h2>
            <h1 className='main-city'>{this.props.city}</h1>
          </div>
        </Col>
      </Row>
    )
  }
}

export default CurrentWeather
