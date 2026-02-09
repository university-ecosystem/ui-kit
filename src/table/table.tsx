import React, { useCallback, useMemo } from 'react';
import { TableColumn, TableProps } from './interfaces';
import {
	TableCellStyled,
	TableContentStyled,
	TableHeaderWrapperStyled,
	TableRowStyled,
	TableWrapperStyled,
} from './table.style';

export const Table = <T extends object>(props: TableProps<T>) => {
	const { columns, onRowClick, data } = props;

	const columnTitle = useMemo(
		() => columns.map((item) => item.title),
		[columns]
	);

	const renderTable = useCallback(() => {
		const columnsData: Array<
			TableColumn<T> & {
				rows: Array<React.ReactElement>;
			}
		> = [];

		columns.forEach((col) => {
			columnsData.push({
				...col,
				rows: data.map((item) => col.render(item[col.accessor])),
			});
		});

		return columnsData;
	}, [columns]);

	return (
		<TableWrapperStyled>
			<TableHeaderWrapperStyled>
				{columnTitle.map((item) => (
					<TableCellStyled>{item}</TableCellStyled>
				))}
			</TableHeaderWrapperStyled>
			{data.map((item) => (
				<TableContentStyled>
					<TableRowStyled>
						{columns.map((col) => (
							<TableCellStyled
								onClick={() => (onRowClick ? onRowClick(item) : void 0)}>
								{col.render(item[col.accessor])}
							</TableCellStyled>
						))}
					</TableRowStyled>
				</TableContentStyled>
			))}
		</TableWrapperStyled>
	);
};
