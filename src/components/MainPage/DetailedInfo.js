import React, { Component } from 'react';
import { Table, TableRow, TableBody, TableCell } from '@material-ui/core';
import moment from 'moment';

class DetailedInfo extends Component {
	render() {
		return (
			<div className="whole-details-area">
				<h4>Weather Details</h4>
				<Table className="weather-details">
					<TableBody>
						<TableRow>
							<TableCell>High Temperature</TableCell>
							<TableCell className="cell-data">{this.props.high}&deg;</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Low Temperature</TableCell>
							<TableCell className="cell-data">{this.props.low}&deg;</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Humidity</TableCell>
							<TableCell className="cell-data">{this.props.humidity}%</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Wind Speed</TableCell>
							<TableCell className="cell-data">{this.props.windSpeed}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Date</TableCell>
							<TableCell className="cell-data">
								{moment.unix(this.props.time).format('MM-DD-YYYY HH:mm')}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		);
	}
}

export default DetailedInfo;
