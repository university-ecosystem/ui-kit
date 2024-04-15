import React, { useCallback, useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { IoIosArrowDown } from 'react-icons/io';
import { SelectProps } from './interfaces';
import { StyledOptionsWrapper, StyledSelectWrapper } from './styles';
import { DropdownOption, Option } from './components';
import { BadgeInput } from '../input';

//!! NEEDS WORK

export const Dropdown: React.FC<SelectProps> = ({
	value,
	options,
	multiSelect,
	placeholder,
	onSelectOption,
}): React.ReactElement => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const [values, setValues] = useState<Array<Option>>([]);

	useEffect(() => {
		setValues(value);
	}, []);

	const handleSelect = useCallback(
		(option: Option, checked: boolean) => {
			if (multiSelect) {
				let newValues = [];

				if (checked) {
					newValues = [...values, option];
					setValues(newValues);
				} else {
					newValues = values.filter((item) => item.id !== option.id);
					setValues(newValues);
				}

				onSelectOption(newValues);
			} else {
				if (checked) {
					const newValues = [option];
					setValues(newValues);

					onSelectOption(newValues);
				} else {
					setValues([]);
					onSelectOption([]);
				}
			}
		},
		[values, multiSelect]
	);

	const handleClickAway = () => {
		setIsOpened(false);
	};

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<StyledSelectWrapper>
				<>
					<BadgeInput
						placeholder={placeholder}
						value={values}
						variant="large"
						onClick={() => {
							setIsOpened((prev) => !prev);
						}}
						icon={
							<IoIosArrowDown
								cursor="pointer"
								onClick={(event) => {
									event.stopPropagation();
									setIsOpened((prev) => !prev);
								}}
								transform={isOpened ? 'rotate(180)' : ''}
							/>
						}
					/>
					{Boolean(isOpened) && (
						<StyledOptionsWrapper>
							{options.map((item) => (
								<DropdownOption
									key={item.id}
									selected={Boolean(
										values.find((value) => value.id === item.id)
									)}
									{...item}
									onSelect={handleSelect}
									checkBox={multiSelect}
								/>
							))}
						</StyledOptionsWrapper>
					)}
				</>
			</StyledSelectWrapper>
		</ClickAwayListener>
	);
};
