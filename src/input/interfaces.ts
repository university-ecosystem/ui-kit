export type InputSize = 'large' | 'default' | 'small' | 'fullwidth';

export type InputProps = React.ComponentProps<'input'> & {
	errorText?: string;
	variant?: InputSize;
	rightIcon?: React.ReactElement;
	disableClearIcon?: boolean;
	value?: string;
	onChange?: (value: string | number) => void;
};
