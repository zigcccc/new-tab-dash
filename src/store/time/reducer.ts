export const SET_TIME = 'SET_TIME';
export const SET_DATE = 'SET_DATE';

export const TimeReducer = (
	state: any,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case SET_TIME: {
			return {
				...state,
				hours: action.payload.hours,
				minutes: action.payload.minutes,
			};
		}
		case SET_DATE: {
			return {
				...state,
				date: action.payload.date,
			};
		}
		default: {
			return state;
		}
	}
};
