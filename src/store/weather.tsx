import React from 'react';

export const WeatherInitialState = {
	data: {},
};

const WeatherContext = React.createContext(WeatherInitialState);

export const WeatherProvider = WeatherContext.Provider;
export const WeatherConsumer = WeatherContext.Consumer;
