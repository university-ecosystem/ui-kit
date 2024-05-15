import React from 'react';
import {
	css,
	Global,
	ThemeProvider as NativeThemeProvider,
	Theme,
} from '@emotion/react';
import { ecosystemTheme } from './constants';
import RalewayRegular from '../font/Raleway-Regular.ttf';
import RalewaySemibold from '../font/Raleway-SemiBold.ttf';

export const ThemeProvider: React.FC<{
	children: React.ReactNode;
	theme?: Theme;
}> = ({ children, theme }) => (
	<NativeThemeProvider theme={theme ?? ecosystemTheme}>
		<Global
			styles={css`
				@font-face {
					font-family: 'Raleway Regular';
					src: url('${RalewayRegular}') format('ttf');
				}

				@font-face {
					font-family: 'Raleway Semibold';
					src: url('${RalewaySemibold}') format('ttf');
				}

				body {
					font-family: 'Raleway Regular', sans-serif;
				}
			`}
		/>
		{children}
	</NativeThemeProvider>
);
