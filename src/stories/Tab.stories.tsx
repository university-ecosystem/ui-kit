import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../tabs';

const meta = {
	title: 'Components/Tabs',
	component: Tabs,
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
		options: [],
		selected: '',
		onSelect: () => {},
	},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: () => {
		const [selected, setSelected] = useState(1);

		return (
			<Tabs
				selected={selected}
				onSelect={(tab) => setSelected(tab.value as number)}
				options={[
					{ title: 'Первый таб', value: 1 },
					{ title: 'Второй таб', value: 2 },
				]}></Tabs>
		);
	},
};
