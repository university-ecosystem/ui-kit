import React from 'react';
import { BadgeProps } from './interfaces';
import { BadgeWrapper } from './styles';

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
			{text}
			{rightIcon}
		</BadgeWrapper>
	);
};
