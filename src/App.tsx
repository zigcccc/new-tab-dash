import React from 'react';
import { LocationContext, TimeContext, WeatherContext } from './store';

export const App = () => {
	const { getCoords, coords } = React.useContext(LocationContext);
	const { hours, minutes, date } = React.useContext(TimeContext);
	const { data: weatherData, getWeather } = React.useContext(WeatherContext);

	React.useEffect(() => {
		if (!coords) {
			getCoords();
		} else {
			getWeather(coords);
		}
	}, [coords]);

	return (
		<div className="App">
			<span>
				{hours}:{minutes} / {date}
			</span>

			<header className="App-header">
				{!!coords ? (
					<p>
						Your coords are: Lat: {coords.latitude}, Long: {coords.longitude}
					</p>
				) : null}
				{!!weatherData && (
					<>
						<strong>You are in: {weatherData.name}</strong>
						<br />
						<strong>The weather is: {weatherData.weather[0].main}</strong>
					</>
				)}
			</header>
		</div>
	);
};
