import React, { Component } from 'react';
import { FormGroup, FormControlLabel, Switch, MenuItem } from "@material-ui/core";

class UnitSelector extends Component {
  render() {
    return (
      <MenuItem>
        <FormGroup>
          <FormControlLabel
            label={ this.props.units.toUpperCase() }
            control={
              <Switch 
                aria-label="LoginSwitch" 
                onChange={ this.props.handleUnits }
              />
            } 
          />
        </FormGroup>
      </MenuItem>
    );
  }
}

export default UnitSelector;