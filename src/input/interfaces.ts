export type InputSize = 'large' | 'default' | 'small';

export type InputProps = React.ComponentProps<'input'> & {
	errorText?: string;
	variant: InputSize;
	value?: string;
	onClear?: () => void;
};
