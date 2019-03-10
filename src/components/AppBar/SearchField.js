import React from 'react';
import { MenuItem, TextField, Button } from '@material-ui/core';

const SearchField = ({ handleChange, activeCity, handleSubmit }) => (
	<div>
		<form>
			<MenuItem>
				<TextField
					placeholder="Search Location"
					type="text"
					onChange={handleChange}
					value={activeCity}
					label="Search Location"
				/>
				<Button type="submit" onClick={handleSubmit} className="location-button">
					<i className="fas fa-search" />
				</Button>
			</MenuItem>
		</form>
	</div>
);

export default SearchField;
