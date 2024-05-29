import React from 'react';
import { PulseLoader } from 'react-spinners';
import { ButtonWrapper } from './styles';
import { ButtonProps } from './interfaces';
import { ecosystemTheme } from '../theme-provider';

export const Button: React.FC<ButtonProps> = ({
	children,
	icon,
	variant = 'filled',
	onlyIcon = false,
	size = 'default',
	isLoading,
	onClick,
	...rest
}) => {
	return (
		<ButtonWrapper variant={variant} onClick={onClick} size={size} {...rest}>
			{isLoading ? (
				<>
					<PulseLoader
						color={
							variant === 'filled'
								? 'white'
								: ecosystemTheme.colors.primary['base']
						}
					/>
				</>
			) : (
				<>
					{icon && <div>{icon}</div>}
					{!onlyIcon && <div>{children}</div>}
				</>
			)}
		</ButtonWrapper>
	);
};
