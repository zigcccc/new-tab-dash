import React from 'react';

import {
	IWeatherData,
	IWeatherState,
	WeatherProviderProps,
} from './interfaces';
import { WeatherReducer, SET_WEATHER_DATA } from './reducer';

import { api } from '../../utils';

export const weatherInitialState = {
	data: null,
};

export const WeatherContext = React.createContext(
	weatherInitialState as IWeatherState
);

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
	const [state, dispatch] = React.useReducer<React.Reducer<any, any>>(
		WeatherReducer,
		weatherInitialState
	);

	const getWeather = async ({ latitude, longitude }: Coordinates) => {
		const { data } = await api.get('/weather', {
			lat: latitude,
			lon: longitude,
		});

		setWeather(data);
	};

	const setWeather = (data: IWeatherData) => {
		dispatch({ type: SET_WEATHER_DATA, payload: { data } });
	};

	return (
		<WeatherContext.Provider value={{ data: state.data, getWeather }}>
			{children}
		</WeatherContext.Provider>
	);
};
