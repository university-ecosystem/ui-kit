import React from 'react';
import { DropdownOptionProps } from './interfaces';
import { StyledDropdownOption, StyledDropdownOptionContent } from './styles';
import { Typography } from '../../../typography';
import { Checkbox } from '../../../checkbox';

export const DropdownOption: React.FC<DropdownOptionProps> = ({
	id,
	title,
	value,
	selected = false,
	checkBox,
	onSelect,
}): React.ReactElement => {
	return (
		<StyledDropdownOption
			selected={selected}
			onClick={() => {
				onSelect({ id, title, value }, !selected);
			}}>
			<StyledDropdownOptionContent>
				{checkBox && (
					<Checkbox checked={selected} value={value} onSelect={() => {}} />
				)}
				<Typography variant="body1">{title}</Typography>
			</StyledDropdownOptionContent>
		</StyledDropdownOption>
	);
};
