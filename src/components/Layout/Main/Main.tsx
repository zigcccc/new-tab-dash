import React from 'react';

import { StyledMain } from './Styles';

export interface Props {
	children: React.ReactChild | React.ReactChild[];
}

export const Main = ({ children }: Props) => {
	return <StyledMain className="main">{children}</StyledMain>;
};
