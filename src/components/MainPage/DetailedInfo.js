import React from 'react';
import { Table, TableRow, TableBody, TableCell } from '@material-ui/core';
import moment from 'moment';

const DetailedInfo = ({ high, low, humidity, windSpeed, time }) => (
	<div className="whole-details-area">
		<h4>Weather Details</h4>
		<Table className="weather-details">
			<TableBody>
				<TableRow>
					<TableCell>High Temperature</TableCell>
					<TableCell className="cell-data">{high}&deg;</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Low Temperature</TableCell>
					<TableCell className="cell-data">{low}&deg;</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Humidity</TableCell>
					<TableCell className="cell-data">{humidity}%</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Wind Speed</TableCell>
					<TableCell className="cell-data">{windSpeed}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Date</TableCell>
					<TableCell className="cell-data">{moment.unix(time).format('ddd, h:mA')}</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	</div>
);

export default DetailedInfo;
