import React from 'react';
import { useTheme } from '@emotion/react';
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
	const theme = useTheme();

	return (
		<BadgeWrapper
			variant={variant}
			onClick={onClick}
			badgeColor={BadgeColorMap(theme)[color]}>
			{leftIcon}
			<Text variant="body1" color="inherit">
				{text}
			</Text>
			{rightIcon}
		</BadgeWrapper>
	);
};
