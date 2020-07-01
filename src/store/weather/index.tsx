import React from 'react';

import {
	IWeatherData,
	IWeatherState,
	WeatherProviderProps,
	IWeatherImage,
} from './interfaces';
import { WeatherReducer, SET_WEATHER_DATA, SET_WEATHER_IMAGE } from './reducer';

import { api, imageApi } from '../../utils';

export const weatherInitialState: IWeatherState = {
	data: null,
	weatherImage: null,
};

export const WeatherContext = React.createContext(weatherInitialState);

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
	const [state, dispatch] = React.useReducer<React.Reducer<any, any>>(
		WeatherReducer,
		weatherInitialState
	);

	const setWeather = (data: IWeatherData) => {
		dispatch({ type: SET_WEATHER_DATA, payload: { data } });
	};

	const getWeather = React.useCallback(
		async ({ latitude, longitude }: Coordinates) => {
			const { data } = await api.get('/weather', {
				lat: latitude,
				lon: longitude,
				units: 'metric',
			});
			setWeather(data);
		},
		[]
	);

	const getWeatherImage = React.useCallback(async (query: string) => {
		const {
			data: { photos },
		} = await imageApi.get('/curated', {
			per_page: 24,
			query: query,
		});
		const randomIndex: number = Math.floor(Math.random() * photos.length);
		setWeatherImage(photos[randomIndex]);
	}, []);

	const setWeatherImage = (image: IWeatherImage) => {
		dispatch({ type: SET_WEATHER_IMAGE, payload: { image } });
	};

	React.useEffect(() => {
		if (state.data) {
			const { name, weather } = state.data;
			const seasonsMap = {
				1: 'winter',
				2: 'winter',
				3: 'spring',
				4: 'spring',
				5: 'spring',
				6: 'summer',
				7: 'summer',
				8: 'summer',
				9: 'autumn',
				10: 'autumn',
				11: 'autumn',
				12: 'winter',
			};
			const currentMonth: number = new Date().getMonth();
			const query = `${name} ${weather[0].main} ${
				(seasonsMap as any)[currentMonth]
			}`;
			getWeatherImage(query);
		}
	}, [state.data, getWeatherImage]);

	return (
		<WeatherContext.Provider
			value={{ data: state.data, weatherImage: state.weatherImage, getWeather }}
		>
			{children}
		</WeatherContext.Provider>
	);
};
