export const ButtonColor = {
	primary: 'primary',
	contrast: 'contrast',
	grey: 'grey',
};

export interface ButtonColorValues {
	hover: string;
	base: string;
	clicked: string;
}

export const ButtonVariants = {
	filled: 'filled',
	secondary: 'secondary',
	text: 'text',
};

export const ButtonSize = {
	fullWidth: 'fullWidth',
	large: 'large',
	default: 'default',
	small: 'small',
	inherit: 'inherit',
};

export type ButtonProps = React.ComponentProps<'button'> & {
	variant?: keyof typeof ButtonVariants;
	onlyIcon?: boolean;
	icon?: React.ReactNode;
	size?: keyof typeof ButtonSize;
	isLoading?: boolean;
	color?: keyof typeof ButtonColor;
	onClick?: {
		(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
		(): void;
	};
};
