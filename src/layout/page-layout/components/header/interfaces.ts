import { ButtonColor, ButtonProps } from '../../../../button';

export interface PageHeaderProps {
	title?: string | React.ReactElement;
	children?: React.ReactElement | React.ReactNode;
	menuButtonColors?: keyof typeof ButtonColor;
	actions?: Array<ButtonProps & { onClick?: () => void }>;
}
