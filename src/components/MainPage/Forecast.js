import React from 'react';
import { ListItem, Toolbar, Tabs } from '@material-ui/core';
import moment from 'moment';

const Forecast = ({ forecast, tempClass }) => (
	<div className={`forecast ${`${tempClass}-forecast`}`}>
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
									<strong className="temp-text">{Math.round(day.main.temp)}&deg;</strong>
								</p>
							</ListItem>
						);
					})}
				</Tabs>
			</Toolbar>
		</div>
	</div>
);

export default Forecast;
