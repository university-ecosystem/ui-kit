import React from 'react';
import { CardHeaderProps } from './interfaces';
import { StyledCardHeader, StyledCardTextWrapper } from './styles';
import { CardHeaderSlot } from '../slots';
import { Typography } from '../../../typography';

export const CardHeader: React.FC<CardHeaderProps> = ({
	title,
	description,
	children,
}): React.ReactElement => {
	return (
		<CardHeaderSlot.Renderer childs={children}>
			<StyledCardHeader>
				<StyledCardTextWrapper>
					<Typography variant="h3">{title}</Typography>
					{description && (
						<Typography variant="body1" color="description">
							{description}
						</Typography>
					)}
				</StyledCardTextWrapper>
			</StyledCardHeader>
		</CardHeaderSlot.Renderer>
	);
};
