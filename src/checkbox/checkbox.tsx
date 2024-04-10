import React from 'react';
import { CheckboxProps } from './interfaces';
import { StyledCheckbox } from './styles';

export const Checkbox: React.FC<CheckboxProps> = ({
	title,
	value,
	checked,
	disabled,
	onSelect,
}): React.ReactElement => {
	return (
		<StyledCheckbox>
			<input
				type="checkbox"
				name={value}
				checked={checked}
				disabled={disabled}
				onChange={() => {
					onSelect(value);
				}}
			/>
			<label htmlFor={value}>{title}</label>
		</StyledCheckbox>
	);
};
