import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

import { CSSReset } from './reset';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${CSSReset};
  
	:root {
		font-size: 16px;

		@media screen and (max-width: 768px) {
			font-size: 14px;
		}

		@media screen and (max-width: 320px) {
			font-size: 13px;
		}
	}

	* {
		box-sizing: border-box;
	}
	
	body {
		background-color: ${({ theme }) => theme.bg};
		color: ${({ theme }) => theme.fg};
		font-family: ${({ theme }) => theme.font__body};
		overflow-x: hidden;
	}

	img, svg {
		max-width: 100%;
		height: auto;
	}
`;
