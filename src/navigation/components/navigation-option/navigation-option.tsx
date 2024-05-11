import React from 'react';
import { NavigationOptionProps } from './interfaces';
import { StyledNavOption } from './styles';
import { Typography } from '../../../typography';

export const NavigationOption: React.FC<NavigationOptionProps> = React.memo(
	({ icon, text, link, selected = false, onSelect }): React.ReactElement => {
		return (
			<StyledNavOption selected={selected} onClick={() => onSelect(link)}>
				{icon}
				<Typography variant="body1" color="inherit" bold>
					{text}
				</Typography>
			</StyledNavOption>
		);
	}
);
