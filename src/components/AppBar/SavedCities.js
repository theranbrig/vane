import React, { Component } from 'react';
import { MenuItem } from '@material-ui/core';

class SavedCities extends Component {
	render() {
		return (
			<div>
				{this.props.savedCities == null ? (
					<MenuItem>Login to Save Cities</MenuItem>
				) : (
					this.props.savedCities.map((city, index) => (
						<MenuItem key={index} onClick={() => this.props.apiSearch(city.city)}>
							{city.city}
						</MenuItem>
					))
				)}
			</div>
		);
	}
}

export default SavedCities;
