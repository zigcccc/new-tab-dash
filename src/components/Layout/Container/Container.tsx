import React from 'react';

import { StyledContainer } from './Styles';

export interface ContainerProps {
	children: React.ReactChild | React.ReactChild[];
	open: boolean;
}

export const Container = ({ children, open }: ContainerProps) => {
	return (
		<StyledContainer open={open} className="container">
			{children}
		</StyledContainer>
	);
};
