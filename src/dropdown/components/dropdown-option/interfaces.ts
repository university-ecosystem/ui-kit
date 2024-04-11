export interface Option {
	id: string;
	title: string | React.ReactElement;
	value: string | number;
}

export interface DropdownOptionProps extends Option {
	selected: boolean;
	onSelect: (option: Option, checked: boolean) => void;
	checkBox?: boolean;
}
