import { ButtonProps } from '../../button/interfaces';

export interface FullscreenErrorProps {
	title: string;
	description?: string;
	image?: string | React.ReactElement;
	children?: React.ReactElement | React.ReactNode;
	action?: ButtonProps;
}
