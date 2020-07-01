import styled from 'styled-components';

export const StyledSearchInput = styled.div`
	margin: 0 2rem 2.5rem;
	background-color: ${({ theme }) => theme.gray__6};
	border-radius: 0.5rem;
	padding: 0.5em 0.5em 0.5em 1.1em;
	font-size: 1.3rem;
	display: flex;
	align-items: center;

	input {
		width: calc(100% - 2.2em);
		margin-left: 1em;
		font-size: 1rem;
		border: none;
		background: none;

		&::placeholder {
			color: ${({ theme }) => theme.gray__4};
		}
	}

	.submit {
		display: flex;
		align-items: center;
		padding: 0.75em 1.1em;
		font-size: 0.8rem;
		border-radius: 0.25rem;
		background-color: ${({ theme }) => theme.color__primary};
		transition: 200ms ease-in-out all;
		opacity: 0;
		visibility: hidden;
		transform: scale(0.9);
		pointer-events: none;

		&--enabled {
			opacity: 1;
			visibility: visible;
			transform: scale(1);
			pointer-events: all;
		}

		&:hover {
			cursor: pointer;
		}

		.submit-text {
			font-weight: 700;
			margin-right: 0.75rem;
		}

		.submit-icon {
			flex: 1;
			font-size: 1.3rem;
			svg {
				max-width: unset;
			}
		}
	}
`;
