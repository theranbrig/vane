import React, { Component } from 'react';
import { ListItem, Toolbar, Tabs } from '@material-ui/core';

class Forecast extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tempClass: ''
		};
	}

	render() {
		console.log(this.props.forecast);
		return (
			<div className={`forecast ${`${this.props.tempClass}-forecast`}`}>
				<div className="horiz-menu">
					<Toolbar>
						<Tabs scrollable scrollButtons="auto" className="forecast-area">
							{this.props.forecast.map((day, index) => (
								<ListItem key={index} className="forecast-cell">
									<h5>{day.dt_txt}</h5>
									<i className={`wi wi-owm-${day.weather[0].id}`} />
									<p>
										H <strong className="temp-text">{Math.round(day.main.temp_max)}&deg;</strong>- L{' '}
										<strong className="temp-text">{Math.round(day.main.temp_min)}&deg;</strong>
									</p>
								</ListItem>
							))}
						</Tabs>
					</Toolbar>
				</div>
			</div>
		);
	}
}

export default Forecast;
