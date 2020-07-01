import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 100;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.fg};
	margin: 0 2rem 1rem;
`;
