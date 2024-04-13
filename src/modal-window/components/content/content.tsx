import React from 'react';
import { ContentProps } from './interfaces';
import { StyledModalContent } from './styles';
import { ContentSlot } from '../slots';

export const Content: React.FC<ContentProps> = ({ children }) => {
	return (
		<ContentSlot.Renderer childs={children}>
			<StyledModalContent>{children}</StyledModalContent>
		</ContentSlot.Renderer>
	);
};
