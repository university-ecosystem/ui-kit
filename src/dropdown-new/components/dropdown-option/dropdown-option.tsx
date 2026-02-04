import React from 'react';
import { DropdownOptionProps } from './interfaces';
import { StyledDropdownOption, StyledDropdownOptionContent } from './styles';
import { Text } from '../../../text';

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
				<Text variant="body1" bold>
					{title}
				</Text>
			</StyledDropdownOptionContent>
		</StyledDropdownOption>
	);
};
