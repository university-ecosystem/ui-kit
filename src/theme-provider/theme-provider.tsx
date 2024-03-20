import React from 'react';
import {
	Global,
	ThemeProvider as NativeThemeProvider,
	css,
} from '@emotion/react';
import { ecosystemTheme } from './constants';
import RalewayRegular from '../font/Raleway-Regular.ttf';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => (
	<NativeThemeProvider theme={ecosystemTheme}>
		<Global
			styles={css`
				@font-face {
					font-family: 'Raleway Regular';
					src: url('${RalewayRegular}') format('ttf');
				}

				body {
					font-family: 'Raleway Regular', sans-serif;
				}
			`}
		/>
		{children}
	</NativeThemeProvider>
);
