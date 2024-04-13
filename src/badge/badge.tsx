import React from 'react';
import { BadgeProps } from './interfaces';
import { BadgeWrapper } from './styles';
import { Typography } from '../typography';

export const Badge: React.FC<BadgeProps> = ({
	rightIcon,
	onClick,
	leftIcon,
	variant = 'filled',
	text,
}): React.ReactElement => {
	return (
		<BadgeWrapper variant={variant} onClick={onClick}>
			{leftIcon}
			<Typography variant="body1" color="inherit">
				{text}
			</Typography>
			{rightIcon}
		</BadgeWrapper>
	);
};
