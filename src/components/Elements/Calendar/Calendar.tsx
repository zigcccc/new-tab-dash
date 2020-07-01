import React from 'react';

import { TimeContext } from '../../../store';

import { StyledCalendar } from './Styles';

export interface CalendarProps {}

export const Calendar = ({}: CalendarProps) => {
	const { date } = React.useContext(TimeContext);
	return (
		<StyledCalendar className="calendar">
			<span className="date-string">{date}</span>
		</StyledCalendar>
	);
};
