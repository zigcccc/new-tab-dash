import React from 'react';

export interface ILocationState {
	coords: Coordinates | null;
	setCoords?: any;
	getCoords?: any;
}
export const locationInitialState = {
	coords: null,
};

export const LocationContext = React.createContext(
	locationInitialState as ILocationState
);

export interface LocationProviderProps {
	children: React.ReactChild;
}

export const SET_COORDS = 'SET_COORDS';

const LocationReducer = (
	state: any,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case SET_COORDS: {
			const { latitude, longitude } = action.payload;
			return {
				...state,
				coords: { latitude, longitude },
			};
		}
		default: {
			return state;
		}
	}
};

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
