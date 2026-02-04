import React from 'react';
import { HoverableWrapper } from './styles';

export const Hoverable: React.FC<{
	children: React.ReactElement | React.ReactNode;
}> = ({ children }): React.ReactElement => {
	return <HoverableWrapper>{children}</HoverableWrapper>;
};
