import styled from 'styled-components';
import { AppWrapperProps } from './AppWrapper';

export const StyledAppWrapper = styled.main<Pick<AppWrapperProps, 'image'>>`
	&.app-wrapper {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		background-image: ${({ image }) => `url('${image}')`};
		background-size: cover;
		background-position: center center;
	}
`;
