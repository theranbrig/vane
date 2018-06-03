import React, { Component } from 'react';
import { MenuItem, TextField, Button } from "@material-ui/core";

class SearchField extends Component {
  render() {
    return (
      <div>
        <form>
          <MenuItem>
            <TextField 
              placeholder='Search Location' 
              type='text' 
              onChange={ this.props.handleChange } 
              value={ this.props.activeCity }
              label="Search Location"
            />
            <Button
              type='submit'
              onClick={ this.props.handleSubmit } 
              className='location-button'
            >
              <i className="fas fa-search"></i>
            </Button>
          </MenuItem>
        </form>
      </div>
    );
  }
}

export default SearchField;