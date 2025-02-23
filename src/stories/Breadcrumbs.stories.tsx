import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Breadcrumbs } from '../breadcrumbs';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs,
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
		breadcrumbs: [],
		onCrumbClick: fn(),
	},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		breadcrumbs: [
			{
				link: '/',
				children: 'Опция 1',
			},
			{
				link: '/',
				children: 'Опция 2',
			},
			{
				link: '/',
				children: 'Опция 3',
			},
			{
				link: '/',
				children: 'Опция 4',
			},
			{
				link: '/',
				children: 'Опция 5',
			},
		],
		onCrumbClick: fn(),
	},
};
