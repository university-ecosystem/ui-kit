export interface TableColumn<T extends object> {
	title: string;
	accessor: keyof T;
	render: (row: T[keyof T]) => React.ReactElement;
}

export interface TableProps<T extends object> {
	data: Array<T>;
	columns: Array<TableColumn<T>>;
	onRowClick?: (row: T) => void;
}
