import React from 'react';

import { IWeatherData, api } from '../utils';

export interface IWeatherState {
	data: IWeatherData | null;
	getWeather?: any;
	setWeather?: any;
}
export const weatherInitialState = {
	data: null,
};

export const WeatherContext = React.createContext(
	weatherInitialState as IWeatherState
);

export interface WeatherProviderProps {
	children: React.ReactChild;
}

export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';

const WeatherReducer = (state: any, action: { type: string; payload: any }) => {
	switch (action.type) {
		case SET_WEATHER_DATA: {
			return {
				...state,
				data: action.payload.data,
			};
		}
		default: {
			return state;
		}
	}
};

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
