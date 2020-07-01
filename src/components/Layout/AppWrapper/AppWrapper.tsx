import React from 'react';

import { StyledAppWrapper } from './Styles';

export interface AppWrapperProps {
	children: React.ReactChild | React.ReactChild[];
	image?: string | null;
}

export const AppWrapper = ({ children, image }: AppWrapperProps) => {
	return (
		<StyledAppWrapper image={image} className="app-wrapper">
			{children}
		</StyledAppWrapper>
	);
};
