import React from 'react';

import { WeatherContext } from '../../../store';

import Icons from '../../Icons';

import { StyledLocationTag } from './Styles';

export interface LocationTagProps {}

export const LocationTag = ({}: LocationTagProps) => {
	const { data } = React.useContext(WeatherContext);
	return (
		<StyledLocationTag className="location-tag">
			<Icons.MapPin />
			<span className="location">{data?.name}</span>
		</StyledLocationTag>
	);
};
