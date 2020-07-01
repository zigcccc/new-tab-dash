import styled from 'styled-components';

export const StyledPhotoAuthorTag = styled.a`
	position: absolute;
	top: 1rem;
	right: 1rem;
	padding: 0.8em 1.2em;
	background-color: ${({ theme }) => theme.bg}40;
	border-radius: 0.5rem;
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.fg};
	transition: 400ms ease-in-out all;

	&:hover {
		background-color: ${({ theme }) => theme.bg}DE;
	}

	.author--name {
		margin-left: 0.5em;
		font-size: 0.8rem;
	}
`;
