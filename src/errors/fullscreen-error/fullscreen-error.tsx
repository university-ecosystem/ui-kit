import React from 'react';
import { FullscreenErrorProps } from './interfaces';
import { StyledScreenError } from './styles';
import { ErrorHeaderSlot } from './slots';
import { Typography } from '../../typography';

export const FullscreenError: React.FC<FullscreenErrorProps> = ({
	children,
	title,
	description,
	image,
}): React.ReactElement => {
	return (
		<StyledScreenError>
			<ErrorHeaderSlot.Renderer childs={children}>
				{image &&
					(typeof image === 'string' ? (
						<img width="100%" src={image} alt="Error" />
					) : (
						<image />
					))}
			</ErrorHeaderSlot.Renderer>
			<Typography variant="h3">{title}</Typography>
			<Typography variant="body1" color="description">
				{description}
			</Typography>
		</StyledScreenError>
	);
};
