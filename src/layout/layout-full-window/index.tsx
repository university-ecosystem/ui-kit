import React from 'react';
import { StyledFullLayout } from './styles';

export const LayoutFullWindow: React.FC<{
	children: React.ReactElement | React.ReactNode;
	gridTemplage?: string;
	className?: string;
}> = ({ children, gridTemplage, className }): React.ReactElement => {
	return (
		<StyledFullLayout className={className} gridTemplate={gridTemplage}>
			{children}
		</StyledFullLayout>
	);
};

export * from './styles';
