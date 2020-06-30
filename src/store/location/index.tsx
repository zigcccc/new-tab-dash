import React from 'react';

import { ILocationState, LocationProviderProps } from './interfaces';
import { LocationReducer, SET_COORDS } from './reducer';

export const locationInitialState = {
	coords: null,
};

export const LocationContext = React.createContext(
	locationInitialState as ILocationState
);

export const LocationProvider = ({ children }: LocationProviderProps) => {
	const [state, dispatch] = React.useReducer<React.Reducer<any, any>>(
		LocationReducer,
		locationInitialState
	);

	const setCoords = (coords: Coordinates) => {
		dispatch({
			type: SET_COORDS,
			payload: coords,
		});
	};

	const getCoords = () => {
		if (!window.navigator) {
			return console.error('Your browser is not supported...');
		}
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				setCoords(coords);
			},
			(err) => console.error(err)
		);
	};

	return (
		<LocationContext.Provider
			value={{ coords: state.coords, setCoords, getCoords }}
		>
			{children}
		</LocationContext.Provider>
	);
};
