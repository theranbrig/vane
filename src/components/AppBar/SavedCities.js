import React from 'react';
import { MenuItem } from '@material-ui/core';

const SavedCities = ({ cityClick, savedCities }) => (
	<div>
		{savedCities == null ? (
			<MenuItem>Login to Save Cities</MenuItem>
		) : (
			savedCities.map((city, index) => (
				<MenuItem key={index} onClick={() => cityClick(city.city)}>
					{city.city}
				</MenuItem>
			))
		)}
	</div>
);

export default SavedCities;
