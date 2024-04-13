import React from 'react';
import { FooterProps } from './interfaces';
import { StyledModalFooter } from './styles';
import { Button } from '../../../button';
import { FooterSlot } from '../slots';

export const Footer: React.FC<FooterProps> = ({ actions, children }) => {
	return (
		<FooterSlot.Renderer childs={children}>
			<StyledModalFooter>
				{actions.map((action) => {
					return <Button {...action} />;
				})}
			</StyledModalFooter>
		</FooterSlot.Renderer>
	);
};
