import React from 'react';
import { MenuOptionWrapper } from './styles';
import { MenuOptionProps } from '../../interfaces';
import { Typography } from '../../../typography';

export const MenuOption: React.FC<MenuOptionProps> = ({
	title,
	description,
	icon,
	onSelect,
}): React.ReactElement => {
	return (
		<MenuOptionWrapper onClick={onSelect}>
			{Boolean(icon) && <>{icon}</>}
			<div>
				<Typography variant="body1">{title}</Typography>
				<Typography variant="body2" color="description">
					{description}
				</Typography>
			</div>
		</MenuOptionWrapper>
	);
};
