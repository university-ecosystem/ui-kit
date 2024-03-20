export const ButtonVariants = {
	filled: 'filled',
	secondary: 'secondary',
	text: 'text',
};

export type ButtonProps = React.ComponentProps<'button'> & {
	variant?: keyof typeof ButtonVariants;
};
