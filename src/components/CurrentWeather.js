import React, { Component } from 'react';
import { Grid } from "@material-ui/core";

class CurrentWeather extends Component {
  render() {
    return (
      <Grid item xl={6} alignContent="center" justify="center">
          <div className='big-data'>
            <i className={ `wi wi-yahoo-${ this.props.iconId } main-icon` }></i>
            <h2>{this.props.temp}&deg;</h2>
          </div>
          <h2 className='main-description'>{ this.props.description }</h2>
          <h1 className='main-city'>{ this.props.city }</h1>
      </Grid>
    )
  }
}

export default CurrentWeather
