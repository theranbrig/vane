import React from 'react';
import { FormGroup, FormControlLabel, Switch, MenuItem } from '@material-ui/core';

const UnitSelector = ({ units, handleUnits }) => (
	<MenuItem>
		<FormGroup>
			<FormControlLabel
				label={units.toUpperCase()}
				control={<Switch aria-label="LoginSwitch" onChange={handleUnits} />}
			/>
		</FormGroup>
	</MenuItem>
);

export default UnitSelector;
