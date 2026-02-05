import { Theme } from '@emotion/react';

export type StatusColorValues =
	| 'succsess'
	| 'error'
	| 'info'
	| 'warning'
	| 'default';

export const StatusColor = (theme: Theme) => ({
	succsess: 'green',
	error: theme.colors.error['base'],
	info: theme.colors.primary['400'],
	warning: 'orange',
	default: theme.colors.grey['400'],
});

export interface StatusProps {
	status: StatusColorValues;
	children?: React.ReactElement | React.ReactNode;
}
