import styled from 'styled-components';

import { ContainerProps } from './Container';

export const StyledContainer = styled.div<Pick<ContainerProps, 'open'>>`
	&.container {
		width: 1024px;
		max-width: 90%;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: auto;
		align-items: center;
		background-color: ${({ theme }) => `${theme.bg}`};
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		box-shadow: 0 -5px 30px -12px rgba(0, 0, 0, 0.2);
		padding: 5rem 1rem;
		position: relative;
		// max-height: ${({ open }) => (open ? '350px' : '300px')};
		transition: 200ms ease-in-out max-height;
	}
`;
