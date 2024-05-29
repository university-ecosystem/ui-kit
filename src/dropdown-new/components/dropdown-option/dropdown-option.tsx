import React from 'react';
import { DropdownOptionProps } from './interfaces';
import { StyledDropdownOption, StyledDropdownOptionContent } from './styles';
import { Typography } from '../../../typography';

export const DropdownOption: React.FC<DropdownOptionProps> = ({
	id,
	title,
	value,
	selected = false,
	onSelect,
}): React.ReactElement => {
	return (
		<StyledDropdownOption
			selected={selected}
			onClick={() => {
				onSelect({ id, title, value }, !selected);
			}}>
			<StyledDropdownOptionContent>
				<Typography variant="body1" bold>
					{title}
				</Typography>
			</StyledDropdownOptionContent>
		</StyledDropdownOption>
	);
};
