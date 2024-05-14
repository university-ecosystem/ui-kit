import React from 'react';
import { useMedia } from 'use-media';
import { NavigationOptionProps } from './interfaces';
import { StyledNavOption } from './styles';
import { Typography } from '../../../typography';
import { ecosystemTheme } from '../../../theme-provider';

export const NavigationOption: React.FC<NavigationOptionProps> = React.memo(
	({ icon, text, link, selected = false, onSelect }): React.ReactElement => {
		const isMobile = useMedia({ maxWidth: ecosystemTheme.breakPoints.mobile });

		return (
			<StyledNavOption selected={selected} onClick={() => onSelect(link)}>
				{icon}
				{!isMobile && (
					<Typography variant="body1" color="inherit" bold>
						{text}
					</Typography>
				)}
			</StyledNavOption>
		);
	}
);
