import React from 'react';
import { BadgeProps } from './interfaces';
import { BadgeWrapper } from './styles';
import { BadgeColorMap } from './constants';
import { Text } from '../text';

export const Badge: React.FC<BadgeProps> = ({
	rightIcon,
	onClick,
	leftIcon,
	variant = 'filled',
	color = 'primary',
	text,
}): React.ReactElement => {
	return (
		<BadgeWrapper
			variant={variant}
			onClick={onClick}
			badgeColor={BadgeColorMap[color]}>
			{leftIcon}
			<Text variant="body1" color="inherit">
				{text}
			</Text>
			{rightIcon}
		</BadgeWrapper>
	);
};
