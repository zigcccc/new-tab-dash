import React from 'react';
import { LocationContext } from './store';

import { api, IWeatherData } from './utils';

export const App = () => {
	// const [coords, setCoords] = React.useState<Coordinates | null>(null);
	const { getCoords, coords } = React.useContext(LocationContext);
	const [weatherData, setWeatherData] = React.useState<IWeatherData | null>(
		null
	);

	const getLocationWeatherData = async ({
		latitude,
		longitude,
	}: Coordinates) => {
		const { data } = await api.get('/weather', {
			lat: latitude,
			lon: longitude,
		});

		setWeatherData(data);
	};
	React.useEffect(() => {
		if (!coords) {
			getCoords();
		} else {
			getLocationWeatherData(coords);
		}
	}, [coords]);
	return (
		<div className="App">
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
