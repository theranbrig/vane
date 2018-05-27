import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';

class User extends Component {

  // User sign in with google firebase

  signIn() {
    console.log('clickSignIn')
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider ).then((result) => {
        const user = result.user;
        this.setState({ user });
    });
  }

  // User sign out with google firebase

  signOut() {
    this.props.firebase.auth().signOut();
    this.setState({ user: null });
  }

  componentDidMount () {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    });
  }

  render() {
    return (
      <div>
        <MenuItem>{this.props.currentUser}</MenuItem>
        { this.props.user === null ? (
          <MenuItem onClick={this.signIn.bind(this)}>Sign In</MenuItem>
        ) : (
          <MenuItem onClick={this.signOut.bind(this)}>Sign Out</MenuItem>
        )
        }
        
        
      </div>
    )
  }
}

export default User
