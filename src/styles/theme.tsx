import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globals';

export const themeBase = Object.freeze({
	gray__1: '#333333',
	gray__2: '#4F4F4F',
	gray__3: '#828282',
	gray__4: '#BDBDBD',
	gray__5: '#E0E0E0',
	gray__6: '#F2F2F2',
	color__primary: '#ECB22F',
	color__accent: '#1EA996',
	color__dark: '#14171A',
	color__gray: '#292F37',
	color__white: '#FFFFFF',
	font__heading: '"Noto Sans JP", sans-serif',
	font__body: '"Noto Sans JP", sans-serif',
	transition__default: '450ms ease-in-out all',
});

export const themeLight = Object.freeze({
	fg: themeBase.color__gray,
	bg: themeBase.color__white,
	light: themeBase.gray__6,
	gray__middle: themeBase.gray__3,
	gray__light: themeBase.gray__4,
});

export const themeDark = Object.freeze({
	fg: themeBase.color__white,
	bg: themeBase.color__gray,
	light: `${themeBase.color__dark}42`,
	gray__middle: themeBase.gray__4,
	gray__light: themeBase.gray__3,
});

const ThemeType = { ...themeBase, ...themeLight };
export type ThemeType = typeof ThemeType;
export type ThemeOptionType = 'light' | 'dark';

export interface ThemeSetupProps {
	children: React.ReactChild;
}
export const ThemeSetup = ({ children }: ThemeSetupProps) => {
	const themeConfig = { ...themeBase, ...themeLight };
	return (
		<ThemeProvider theme={themeConfig}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};
