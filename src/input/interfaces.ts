export type InputSize = 'large' | 'default' | 'small' | 'fullwidth';

export type InputBaseColor = 'white' | 'grey';

export type InputProps = React.ComponentProps<'input'> & {
	errorText?: string;
	variant?: InputSize;
	rightIcon?: React.ReactElement;
	disableClearIcon?: boolean;
	value?: string;
	baseColor?: InputBaseColor;
	label?: string;
	onChange?: (value: string | number) => void;
};
