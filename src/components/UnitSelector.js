import React, { Component } from 'react';
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";

class UnitSelector extends Component {
  render() {
    return (
      <div>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch 
                aria-label="LoginSwitch" 
                color="primary"
                onClick={ this.props.handleUnits }
              />
            }
            label={this.props.units.toUpperCase()}
          />
        </FormGroup>
      </div>
    );
  }
}

export default UnitSelector;