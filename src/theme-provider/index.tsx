import React from 'react';
import { ThemeProvider as NativeThemeProvider, Theme } from '@emotion/react';
import { ecosystemTheme } from './constants';

export const ThemeProvider: React.FC<{
	children: React.ReactNode;
	theme?: Theme;
}> = ({ children, theme }) => (
	<NativeThemeProvider theme={theme ?? ecosystemTheme}>
		{children}
	</NativeThemeProvider>
);
