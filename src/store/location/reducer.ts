export const SET_COORDS = 'SET_COORDS';

export const LocationReducer = (
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
