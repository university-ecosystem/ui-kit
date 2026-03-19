import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from '../table';

const meta = {
	title: 'Components/Table',
	component: Table,
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
		columns: [],
		data: [],
	},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
	{
		name: 'Иван',
		age: '20 лет',
		department: 'ОФИС',
	},
	{
		name: 'Пётр',
		age: '23 года',
		department: 'ОФИС',
	},
	{
		name: 'Михаил',
		age: '19 лет',
		department: 'ОФИС',
	},
];

export const Primary: Story = {
	render: () => {
		return (
			<Table
				data={data}
				columns={[
					{ title: 'Имя', accessor: 'name', render: (row) => <>{row}</> },
					{ title: 'Возраст', accessor: 'age', render: (row) => <>{row}</> },
					{
						title: 'Департамент',
						accessor: 'department',
						render: (row) => <>{row}</>,
					},
				]}
			/>
		);
	},
};
