export const BadgeVariants = {
	filled: 'filled',
	outlined: 'outlined',
};

export interface BadgeProps {
	leftIcon?: React.ReactElement;
	rightIcon?: React.ReactElement;
	text: string;
	variant?: keyof typeof BadgeVariants;
	onClick?: () => void;
}
