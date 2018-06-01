import React, { Component } from 'react';
import SavedCities from './SavedCities';
import User from "./User"
import { Button, TextField, Toolbar, Menu, MenuItem, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import mainLogo from "./../assets/Untitled-1.png";

const ITEM_HEIGHT = 45;

class ApplicationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      user: null
    }
  }

  setUser(user) {
    this.setState({
      user: user
    })
  }

  // Menu Open and Close

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <Toolbar className='menu'>
          <IconButton
            aria-owns={anchorEl ? 'simple-menu' : null}
            onClick={this.handleOpen}
            aria-label="More"
            aria-haspopup="true"
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >
            <div>
              <form>
                <MenuItem>
                  <TextField 
                    placeholder='Search Location' 
                    type='text' 
                    onChange={this.props.handleChange} 
                    value={this.state.activeCity}
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
              <MenuItem>{this.props.currentUser}</MenuItem>
              <SavedCities/>
              <User 
                firebase={ this.props.firebase }
                setUser={ this.setUser.bind(this) }
                signIn={ this.props.signIn }
                signOut={ this.props.signOut }
                user={ this.state.user }
              />
          </Menu>
          <img src={mainLogo} alt='main logo' className='app-bar-logo'/>
        </Toolbar>
      </div>
    );
  }
}

export default ApplicationBar;