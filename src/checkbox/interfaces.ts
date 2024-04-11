export type CheckboxProps = {
	title?: React.ReactElement | string;
	value: string | number;
	checked: boolean;
	onSelect: (value: string | number) => void;
	disabled?: boolean;
};
