export const BadgeVariants = {
	filled: 'filled',
	outlined: 'outlined',
};

export const BadgeColor = {
	primary: 'primary',
	contrast: 'contrast',
	grey: 'grey',
};

export interface BadgeColorValues {
	hover: string;
	base: string;
}

export interface BadgeProps {
	leftIcon?: React.ReactElement;
	rightIcon?: React.ReactElement;
	text: string | React.ReactElement;
	variant?: keyof typeof BadgeVariants;
	color?: keyof typeof BadgeColor;
	onClick?: () => void;
}
