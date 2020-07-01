export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
export const SET_WEATHER_IMAGE = 'SET_WEATHER_IMAGE';

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
		case SET_WEATHER_IMAGE: {
			return {
				...state,
				weatherImage: action.payload.image,
			};
		}
		default: {
			return state;
		}
	}
};
