import React from 'react';
import { ButtonWrapper } from './styles';
import { ButtonProps } from './interfaces';

export const Button: React.FC<ButtonProps> = ({
	children,
	icon,
	variant = 'filled',
	onlyIcon = false,
	size = 'default',
	onClick,
	...rest
}) => {
	return (
		<ButtonWrapper variant={variant} onClick={onClick} size={size} {...rest}>
			{icon && <div>{icon}</div>}
			{!onlyIcon && <div>{children}</div>}
		</ButtonWrapper>
	);
};
