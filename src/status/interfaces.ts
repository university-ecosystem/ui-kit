import { ecosystemTheme } from '../theme-provider/constants';

export const StatusColor = {
	succsess: 'green',
	error: ecosystemTheme.colors.error['base'],
	info: ecosystemTheme.colors.primary['400'],
	warning: 'orange',
	default: ecosystemTheme.colors.grey['400'],
};

export interface StatusProps {
	status: keyof typeof StatusColor;
	children?: React.ReactElement | React.ReactNode;
}
