import React from 'react';
import { CardFooterProps } from './interfaces';
import { StyledCardFooter } from './styles';
import { CardFooterSlot } from '../slots';
import { Button } from '../../../button';

export const CardFooter: React.FC<CardFooterProps> = ({
	children,
	actions,
}): React.ReactElement => {
	return (
		<CardFooterSlot.Renderer childs={children}>
			<StyledCardFooter>
				{actions.map((actionProps) => (
					<Button {...actionProps} />
				))}
			</StyledCardFooter>
		</CardFooterSlot.Renderer>
	);
};
