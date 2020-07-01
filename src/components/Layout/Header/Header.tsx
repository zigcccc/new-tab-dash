import React from 'react';

import { StyledHeader } from './Styles';

export interface HeaderProps {
	children: React.ReactChild | React.ReactChild[];
}

export const Header = ({ children }: HeaderProps) => {
	return <StyledHeader className="header">{children}</StyledHeader>;
};
