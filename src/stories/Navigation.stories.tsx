import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BiHome } from 'react-icons/bi';
import { Navigation } from '../navigation';
import { LayoutFullWindow, PageLayout } from '../layout';
import { Typography } from '../typography';
import { Menu } from '../menu';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Components/Navigation',
	component: Navigation,
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
		onSelectOption: fn(),
		options: [{ text: 'Home', link: '/home', selected: true }],
	},
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		onSelectOption: fn(),
		logo: <Typography variant="h3">Logo</Typography>,
		options: [
			{ text: 'Home', link: '/home', selected: true, icon: <BiHome /> },
		],
	},
	render: (args) => {
		return (
			<div style={{ width: '1000px' }}>
				<LayoutFullWindow>
					<Navigation
						{...args}
						footer={
							<Menu
								options={[
									{ title: 'Title', onSelect: fn() },
									{ title: 'Title', onSelect: fn() },
									{ title: 'Title', onSelect: fn() },
								]}>
								Menu
							</Menu>
						}
					/>
					<PageLayout>
						<PageLayout.Header title="Text" />
						<PageLayout.Content>content</PageLayout.Content>
					</PageLayout>
				</LayoutFullWindow>
			</div>
		);
	},
};
