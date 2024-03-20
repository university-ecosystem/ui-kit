import React from 'react';
import type { Preview } from '@storybook/react';
import ThemeDecorator from './theme-decorator';
import { ThemeProvider } from '../src/theme-provider';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default preview;
