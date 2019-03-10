import React, { Component } from 'react';
import { ListItem, Toolbar, Tabs } from '@material-ui/core';
import moment from 'moment';

class Forecast extends Component {
	state = { tempClass: '' };

	render() {
		const { forecast } = this.props;
		return (
			<div className={`forecast ${`${this.props.tempClass}-forecast`}`}>
				<div className="horiz-menu">
					<Toolbar>
						<Tabs scrollable scrollButtons="auto" className="forecast-area">
							{forecast.map((day, index) => {
								let dayNight = '';
								if (
									parseInt(moment(day.dt_txt).format('HH')) <= 6 ||
									parseInt(moment(day.dt_txt).format('HH')) >= 19
								) {
									dayNight = 'night';
								} else {
									dayNight = 'day';
								}
								return (
									<ListItem key={index} className="forecast-cell">
										<h5>{moment(day.dt_txt).format('ddd, hA')}</h5>
										{dayNight === 'night' ? (
											<i className={`wi wi-owm-night-${day.weather[0].id}`} />
										) : (
											<i className={`wi wi-owm-${day.weather[0].id}`} />
										)}
										<p>
											Temp <strong className="temp-text">{Math.round(day.main.temp)}&deg;</strong>-
										</p>
									</ListItem>
								);
							})}
						</Tabs>
					</Toolbar>
				</div>
			</div>
		);
	}
}

export default Forecast;
