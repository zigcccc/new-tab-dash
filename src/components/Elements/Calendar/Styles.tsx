import styled from 'styled-components';

export const StyledCalendar = styled.div`
	.date-string {
		font-weight: 100;
		font-size: 1.6rem;
		color: ${({ theme }) => theme.fg};
	}
`;
