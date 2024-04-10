export type CheckboxProps = {
	title?: React.ReactElement | string;
	value: string;
	checked: boolean;
	onSelect: (value: string) => void;
	disabled?: boolean;
};
