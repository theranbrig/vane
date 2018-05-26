import React, { Component } from 'react';
import { DropdownItem } from "reactstrap";

class SavedCities extends Component {
  render() {
    return (
      <div>
        <DropdownItem>
          Phuket
        </DropdownItem>
        <DropdownItem>
          Rome
        </DropdownItem>
        <DropdownItem>
          Chicago
        </DropdownItem>
      </div>
    );
  }
}

export default SavedCities;