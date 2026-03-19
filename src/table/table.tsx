import React, { useMemo } from 'react';
import { TableProps } from './interfaces';
import {
	TableCellStyled,
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

	return (
		<TableWrapperStyled>
			<TableHeaderWrapperStyled>
				<TableRowStyled>
					{columnTitle.map((item) => (
						<TableCellStyled isHeader>{item}</TableCellStyled>
					))}
				</TableRowStyled>
			</TableHeaderWrapperStyled>

			<tbody>
				{data.map((item) => (
					<TableRowStyled>
						{columns.map((col) => (
							<TableCellStyled
								onClick={() => (onRowClick ? onRowClick(item) : void 0)}>
								{col.render(item[col.accessor])}
							</TableCellStyled>
						))}
					</TableRowStyled>
				))}
			</tbody>
		</TableWrapperStyled>
	);
};
