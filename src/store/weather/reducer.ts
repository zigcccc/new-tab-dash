export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';

export const WeatherReducer = (
	state: any,
	action: { type: string; payload: any }
) => {
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
