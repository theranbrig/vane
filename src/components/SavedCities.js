import React, { Component } from 'react';
import { MenuItem } from "@material-ui/core";

class SavedCities extends Component {
  render() {
    return (
      <div>
        <MenuItem>
          Phuket
        </MenuItem>
        <MenuItem>
          Rome
        </MenuItem>
        <MenuItem>
          Chicago
        </MenuItem>
      </div>
    );
  }
}

export default SavedCities;