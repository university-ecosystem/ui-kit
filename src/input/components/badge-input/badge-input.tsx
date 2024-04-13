import React from 'react';
import { BadgeInputProps } from './interfaces';
import { StyledBadgeListWrapper } from './styles';
import { StyledInputContainer, StyledInputWrapper } from '../../styles';
import { Badge } from '../../../badge';
import { Typography } from '../../../typography';

export const BadgeInput: React.FC<BadgeInputProps> = ({
	value,
	placeholder,
	variant,
	errorText,
	onClick,
	icon,
}) => {
	return (
		<StyledInputContainer>
			<StyledInputWrapper
				errorText={errorText}
				variant={variant}
				onClick={onClick}>
				<StyledBadgeListWrapper>
					{Boolean(!value?.length) && (
						<Typography variant="body2" color="description">
							{placeholder}
						</Typography>
					)}
					{value?.map((item) => {
						return <Badge key={item.id} text={item.title} variant="filled" />;
					})}
				</StyledBadgeListWrapper>
				{Boolean(icon) && <>{icon}</>}
			</StyledInputWrapper>
		</StyledInputContainer>
	);
};
