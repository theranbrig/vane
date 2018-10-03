import React, { Component } from 'react';
import User from './User';
import SavedCities from './SavedCities';
import SearchField from './SearchField';
import UnitSelector from './UnitSelector';
import mainLogo from '../../assets/logo.jpg';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import { Toolbar, Menu, MenuItem, IconButton, Button } from '@material-ui/core';

const ITEM_HEIGHT = 45;

class ApplicationBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null,
			user: null
		};
	}

	setUser(user) {
		this.setState({
			user: user
		});
	}

	// Menu open and close functions

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
				<Toolbar className="menu">
					<IconButton
						aria-owns={anchorEl ? 'simple-menu' : null}
						onClick={this.handleOpen}
						aria-label="More"
						aria-haspopup="true"
						color="inherit">
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
								width: 200
							}
						}}>
						<SearchField
							handleSubmit={this.props.handleSubmit}
							handleChange={this.props.handleChange}
							activeCity={this.state.activeCity}
						/>
						<MenuItem>{this.props.currentUser}</MenuItem>
						<SavedCities
							savedCities={this.props.savedCities}
							user={this.props.currentUser}
							apiSearch={this.props.apiSearch}
						/>
						<User
							firebase={this.props.firebase}
							setUser={this.setUser.bind(this)}
							signIn={this.props.signIn}
							signOut={this.props.signOut}
							user={this.state.user}
						/>
						<UnitSelector handleUnits={this.props.handleUnits} units={this.props.units} />
					</Menu>
					<img src={mainLogo} alt="main logo" className="app-bar-logo" />
					<Button
						color="primary"
						aria-label="Add"
						className="add-button"
						onClick={this.props.addCity}>
						<AddIcon />
					</Button>
				</Toolbar>
			</div>
		);
	}
}

export default ApplicationBar;
