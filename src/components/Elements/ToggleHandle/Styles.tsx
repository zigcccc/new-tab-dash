import styled from 'styled-components';

export const StyledToggleHandle = styled.div`
	position: absolute;
	top: 1rem;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	padding: 1rem 0;

	&:hover {
		cursor: pointer;

		.handle {
			background-color: ${({ theme }) => theme.gray__2};
			transform: rotate(25deg) scaleX(1.2);

			&--left {
				transform: rotate(-25deg) scaleX(1.2);
				border-radius: 200px;

				&__open {
					transform: rotate(25deg) scaleX(1.2);
				}
			}

			&--right {
				border-radius: 200px;

				&__open {
					transform: rotate(-25deg) scaleX(1.2);
				}
			}
		}
	}

	.handle {
		width: 20px;
		height: 5px;
		border-radius: 200px;
		background-color: ${({ theme }) => theme.gray__5};
		transition: 400ms ease-in-out all;

		&--left {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			transform-origin: left center;
		}

		&--right {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
			transform-origin: right center;
		}
	}
`;
