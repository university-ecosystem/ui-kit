import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { RxCross1 } from 'react-icons/rx';
import { SelectProps } from './interfaces';
import {
	StyledBadgeContaier,
	StyledDropdownOptionsWrapper,
	StyledSelectWrapper,
} from './styles';
import { DropdownOption, Option } from './components';
import { Input } from '../input';
import { FilterError } from '../errors';
import { Badge } from '../badge';

//!! NEEDS WORK

export const Dropdown: React.FC<SelectProps> = ({
	value,
	options,
	multiSelect,
	placeholder,
	disableSearch,
	onSelectOption,
	...props
}): React.ReactElement => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const [values, setValues] = useState<Array<Option>>([]);
	const [searchValue, setSearchValue] = useState<string>('');

	useEffect(() => {
		setValues(value);
	}, []);

	const filteredOptions = useMemo(() => {
		if (searchValue.length) {
			return options.filter((option) => option.title.includes(searchValue));
		}

		return options;
	}, [searchValue]);

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
					<Input
						{...props}
						placeholder={placeholder}
						value={searchValue}
						disableClearIcon={disableSearch}
						onChange={(value) => {
							if (!disableSearch) {
								setSearchValue(String(value));
							}
						}}
						onClick={() => {
							setIsOpened((prev) => !prev);
						}}
					/>
					<StyledBadgeContaier>
						{values.map((item) => {
							return (
								<Badge
									text={item.title}
									rightIcon={
										<RxCross1 onClick={() => handleSelect(item, false)} />
									}
								/>
							);
						})}
					</StyledBadgeContaier>
					{Boolean(isOpened) && (
						<StyledDropdownOptionsWrapper>
							{!filteredOptions.length && <FilterError />}
							{filteredOptions.map((item) => (
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
						</StyledDropdownOptionsWrapper>
					)}
				</>
			</StyledSelectWrapper>
		</ClickAwayListener>
	);
};
