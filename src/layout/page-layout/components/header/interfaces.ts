import { ButtonProps } from '../../../../button';

export interface PageHeaderProps {
	title?: string | React.ReactElement;
	children?: React.ReactElement | React.ReactNode;

	actions?: Array<ButtonProps>;
}
