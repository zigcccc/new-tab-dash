import React from 'react';

import { ITimeState, TimeProviderProps } from './interfaces';
import { TimeReducer, SET_DATE, SET_TIME } from './reducer';

import { formatTimeString, formatDateString } from '../../utils';

export const timeInitialState = {
	minutes: formatTimeString(new Date().getMinutes()),
	hours: formatTimeString(new Date().getHours()),
	date: formatDateString(new Date().getTime()),
};

export const TimeContext = React.createContext(timeInitialState as ITimeState);

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
