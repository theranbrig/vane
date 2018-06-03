import React, { Component } from 'react';
import { ListItem, Toolbar, Tabs } from "@material-ui/core";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempClass: '',
    }
  }

  render() {
    return (
      <div className={ `forecast ${ `${ this.props.tempClass }-forecast` }` }>
        <div className='horiz-menu'>
          <Toolbar>
            <Tabs
              scrollable
              scrollButtons="auto"
              className='forecast-area'
            >
              {
                this.props.forecast.map( ( day, index ) => 
                  <ListItem key={ index } className='forecast-cell'>
                    <h5>{ day.day }</h5>
                    <i className={`wi wi-yahoo-${ day.code }`}></i>
                    <p>H <strong className='temp-text'>{ day.high }&deg;</strong>
                     - L <strong className='temp-text'>{ day.low }&deg;</strong></p>
                  </ListItem>
                )
              }
            </Tabs>
          </Toolbar>
        </div>
      </div>
    );
  }
}

export default Forecast;