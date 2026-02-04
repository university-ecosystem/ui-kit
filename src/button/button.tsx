import React from 'react';
import { PulseLoader } from 'react-spinners';
import { ButtonWrapper } from './styles';
import { ButtonProps } from './interfaces';
import { ButtonColorMap } from './constants';
import { ecosystemTheme } from '../theme-provider/constants';

export const Button: React.FC<ButtonProps> = ({
	children,
	icon,
	variant = 'filled',
	onlyIcon = false,
	size = 'default',
	color = 'primary',
	isLoading,
	onClick,
	...rest
}) => {
	return (
		<ButtonWrapper
			buttonColor={ButtonColorMap[color]}
			variant={variant}
			onClick={onClick}
			size={size}
			{...rest}>
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
