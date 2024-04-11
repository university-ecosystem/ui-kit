import React from 'react';
import { CheckboxProps } from './interfaces';
import { StyledCheckbox } from './styles';
import { Typography } from '../typography';

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
				name={String(value)}
				checked={checked}
				disabled={disabled}
				onChange={() => {
					onSelect(value);
				}}
			/>
			<label htmlFor={String(value)}>
				<Typography variant="body1">{title}</Typography>
			</label>
		</StyledCheckbox>
	);
};
