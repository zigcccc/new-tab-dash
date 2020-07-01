import React from 'react';
import cs from 'classnames';

import { StyledToggleHandle } from './Styles';

export interface ToggleHandleProps {
	onClick: React.ReactEventHandler<HTMLDivElement>;
	open: boolean;
}

export const ToggleHandle = ({ onClick, open }: ToggleHandleProps) => {
	return (
		<StyledToggleHandle onClick={onClick} className="toggle-handle">
			<span
				className={cs('handle handle--left', { 'handle--left__open': open })}
			></span>
			<span
				className={cs('handle handle--right', { 'handle--right__open': open })}
			></span>
		</StyledToggleHandle>
	);
};
