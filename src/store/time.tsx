import React from 'react';

import { formatTimeString, formatDateString } from '../utils';

export interface ITimeState {
	minutes: string;
	hours: string;
	date: string;
}

export const timeInitialState = {
	minutes: formatTimeString(new Date().getMinutes()),
	hours: formatTimeString(new Date().getHours()),
	date: formatDateString(new Date().getTime()),
};

export const TimeContext = React.createContext(timeInitialState as ITimeState);

export interface TimeProviderProps {
	children: React.ReactChild;
}

export const SET_TIME = 'SET_TIME';
export const SET_DATE = 'SET_DATE';

const TimeReducer = (state: any, action: { type: string; payload: any }) => {
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

export const TimeProvider = ({ children }: TimeProviderProps) => {
	const [state, dispatch] = React.useReducer<React.Reducer<any, any>>(
		TimeReducer,
		timeInitialState
	);

	const setTime = () => {
		const date = new Date();
		const minutes = formatTimeString(date.getMinutes());
		const hours = formatTimeString(date.getHours());
		const formattedDate = formatDateString(date.getTime());
		if (minutes !== state.minutes || hours !== state.hours) {
			dispatch({
				type: SET_TIME,
				payload: { minutes, hours },
			});
		}
		if (formattedDate !== state.date) {
			dispatch({
				type: SET_DATE,
				payload: { date: formattedDate },
			});
		}
	};

	React.useEffect(() => {
		const timer = setTimeout(setTime, 60000);
		return () => clearTimeout(timer);
	});

	return (
		<TimeContext.Provider
			value={{ minutes: state.minutes, hours: state.hours, date: state.date }}
		>
			{children}
		</TimeContext.Provider>
	);
};
