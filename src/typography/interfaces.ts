export const TypographyVariants = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	body1: 'body1',
	body2: 'body2',
};

export const TypographyColors = {
	error: 'error',
	primary: 'primary',
	secondary: 'secondary',
	base: 'base',
	description: 'description',
	inherit: 'inherit',
};

export interface TypographyProps {
	variant: keyof typeof TypographyVariants;
	color?: keyof typeof TypographyColors;
	textAlign?: string;
	children: React.ReactNode;
	bold?: boolean;
}
