import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../alert';
import { Text } from '../text';

const meta = {
	title: 'Components/Alert',
	component: Alert,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: {},
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		title: '',
		children: '',
	},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: () => {
		return (
			<Alert
				closable
				defaultOpened
				title={<Text variant="body1">Заголовок</Text>}>
				А тут дите
			</Alert>
		);
	},
};
