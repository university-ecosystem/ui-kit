import React from 'react';
import { ThemeProvider as NativeThemeProvider } from '@emotion/react';
import { ecosystemTheme } from './constants';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => (
	<NativeThemeProvider theme={ecosystemTheme}>{children}</NativeThemeProvider>
);
