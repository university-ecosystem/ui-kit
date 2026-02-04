import React from 'react';
import { CardHeaderProps } from './interfaces';
import { StyledCardHeader, StyledCardTextWrapper } from './styles';
import { CardHeaderSlot } from '../slots';
import { Text } from '../../../text';

export const CardHeader: React.FC<CardHeaderProps> = ({
	title,
	description,
	children,
}): React.ReactElement => {
	return (
		<CardHeaderSlot.Renderer childs={children}>
			<StyledCardHeader>
				<StyledCardTextWrapper>
					<Text variant="h3">{title}</Text>
					{description && (
						<Text variant="body1" color="description">
							{description}
						</Text>
					)}
				</StyledCardTextWrapper>
			</StyledCardHeader>
		</CardHeaderSlot.Renderer>
	);
};
