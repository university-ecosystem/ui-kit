import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from '../input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: {
		children: { type: 'string', defaultValue: 'Why is type undefined?' },
		variant: { type: 'string', defaultValue: 'filled' },
	},
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large: Story = {
	args: {
		variant: 'large',
		placeholder: 'Large',
	},
};

export const Default: Story = {
	args: {
		variant: 'default',
		placeholder: 'Default',
	},
};

export const Small: Story = {
	args: {
		variant: 'small',
		placeholder: 'Small',
	},
};
