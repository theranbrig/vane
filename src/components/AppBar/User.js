import React, { Component } from 'react';
import { MenuItem, Button } from '@material-ui/core';

class User extends Component {
	componentDidMount() {
		this.props.firebase.auth().onAuthStateChanged(user => {
			this.props.setUser(user);
		});
	}

	render() {
		const { user, signIn, signOut } = this.props;
		return (
			<div>
				{user === null ? (
					<MenuItem onClick={signIn}>
						<Button color="primary" variant="outlined">
							Sign In
						</Button>
					</MenuItem>
				) : (
					<MenuItem onClick={signOut}>
						<Button color="secondary" variant="outlined">
							Sign Out
						</Button>
					</MenuItem>
				)}
			</div>
		);
	}
}

export default User;
