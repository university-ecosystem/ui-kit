import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ModalWindow } from '../modal-window';
import { Button } from '../button';
import { Input } from '../input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Components/ModalWindow',
	component: ModalWindow,
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
		isOpen: true,
		onClose: fn(),
	},
} satisfies Meta<typeof ModalWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		isOpen: false,
		onClose: fn(),
		children: <></>,
	},
	render: (args) => {
		const [open, setOpen] = useState(args.isOpen);

		return (
			<>
				<Button
					onClick={() => {
						setOpen(true);
					}}>
					Показать модалку
				</Button>
				<ModalWindow
					isOpen={open}
					onClose={() => {
						setOpen(false);
					}}>
					<ModalWindow.Header
						title="Test"
						description="test test"
						onClose={() => {
							setOpen(false);
						}}
					/>
					<ModalWindow.Content>
						<Input placeholder="Form text" />
					</ModalWindow.Content>
					<ModalWindow.Footer
						actions={[
							{
								children: 'Submit',
								onClick: fn(),
							},
						]}></ModalWindow.Footer>
				</ModalWindow>
			</>
		);
	},
};
