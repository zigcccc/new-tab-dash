import styled from 'styled-components';

export const StyledClock = styled.div`
	&.clock {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		.digits {
			font-weight: 900;
			font-size: 6.75rem;
			color: ${({ theme }) => theme.fg};

			&:first-child {
				padding-right: 0.25em;
			}

			&--minutes {
				color: ${({ theme }) => theme.color__primary};
			}
		}

		.separator {
			font-size: 2.5rem;
			color: ${({ theme }) => theme.color__accent};
			font-weight: 700;
		}
	}
`;
