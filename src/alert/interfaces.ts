import type React from 'react';

export type AlertColors = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
	title: React.ReactNode;
	defaultOpened?: boolean;
	closable?: boolean;
	color?: AlertColors;
	children: React.ReactNode;
}
