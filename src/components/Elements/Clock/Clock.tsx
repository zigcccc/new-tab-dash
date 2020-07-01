import React from 'react';

import { TimeContext } from '../../../store';

import { StyledClock } from './Styles';

export interface ClockProps {}

export const Clock = ({}: ClockProps) => {
	const { hours, minutes } = React.useContext(TimeContext);
	return (
		<StyledClock className="clock">
			<span className="digits digits--hours">{hours}</span>
			<span className="digits digits--minutes">{minutes}</span>
		</StyledClock>
	);
};
