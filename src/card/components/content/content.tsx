import React from 'react';
import { StyledCardContent } from './styles';

export const CardContent: React.FC<{
	children: React.ReactElement | React.ReactNode;
}> = ({ children }): React.ReactElement => {
	return <StyledCardContent>{children}</StyledCardContent>;
};
