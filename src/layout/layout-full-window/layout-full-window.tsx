import React from 'react';
import { StyledFullLayout } from './styles';

export const LayoutFullWindow: React.FC<{
	children: React.ReactElement | React.ReactNode;
}> = ({ children }): React.ReactElement => {
	return <StyledFullLayout>{children}</StyledFullLayout>;
};
