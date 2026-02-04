import React from 'react';
import { MenuOptionWrapper } from './styles';
import { MenuOptionProps } from '../../interfaces';
import { Text } from '../../../text';

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
				<Text variant="body1">{title}</Text>
				<Text variant="body2" color="description">
					{description}
				</Text>
			</div>
		</MenuOptionWrapper>
	);
};
