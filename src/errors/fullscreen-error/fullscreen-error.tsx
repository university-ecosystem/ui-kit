import React from 'react';
import { FullscreenErrorProps } from './interfaces';
import { StyledScreenError } from './styles';
import { ErrorHeaderSlot } from './slots';
import { Text } from '../../text';
import { Button } from '../../button';

export const FullscreenError: React.FC<FullscreenErrorProps> = ({
	children,
	title,
	description,
	image,
	action,
}): React.ReactElement => {
	return (
		<StyledScreenError>
			<ErrorHeaderSlot.Renderer childs={children}>
				{image &&
					(typeof image === 'string' ? (
						<img width="100%" src={image} alt="Error" />
					) : (
						<>{image}</>
					))}
			</ErrorHeaderSlot.Renderer>
			<Text variant="h3">{title}</Text>
			<Text variant="body1" color="description">
				{description}
			</Text>
			{action && <Button {...action} />}
		</StyledScreenError>
	);
};
