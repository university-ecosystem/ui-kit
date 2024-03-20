import React from 'react';
import { ButtonWrapper } from './styles';
import { ButtonProps } from './interfaces';

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'filled',
	onClick,
	...rest
}) => {
	return (
		<ButtonWrapper variant={variant} onClick={onClick} {...rest}>
			{children}
		</ButtonWrapper>
	);
};
