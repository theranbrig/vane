import React, { Component } from 'react';
import { MenuItem, Button } from '@material-ui/core';

class User extends Component {

  componentDidMount () {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    });
  }

  render() {
    return (
      <div>
        { this.props.user === null ? (
            <MenuItem onClick={this.props.signIn}>
              <Button color="primary" variant="outlined">Sign In</Button>
            </MenuItem>
          ) : (
            <MenuItem onClick={this.props.signOut}>
              <Button color="secondary" variant="outlined">Sign Out</Button>
            </MenuItem>
          )
        }
      </div>
    )
  }
}

export default User
