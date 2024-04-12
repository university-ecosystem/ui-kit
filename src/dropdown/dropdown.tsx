import React, { useCallback, useMemo, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { SelectProps } from './interfaces';
import { StyledOptionsWrapper, StyledSelectWrapper } from './styles';
import { Input } from '../input';
import { DropdownOption, Option } from './components';
import ClickAwayListener from 'react-click-away-listener';

//!! NEEDS WORK

export const Dropdown: React.FC<SelectProps> = ({
	value,
	options,
	multiSelect = false,
	onSelectOption,
	...rest
}): React.ReactElement => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const [values, setValues] = useState<Array<Option>>(value);
	const inputRef = useRef<HTMLInputElement>(null);

	const inputFieldValue = useMemo(() => {
		let str = '';

		values.forEach((item) => {
			if (str.length) {
				str += ',';
			}

			return (str += item.title);
		});

		return str;
	}, [values]);

	const handleSelect = useCallback((option: Option, checked: boolean) => {
		if (multiSelect) {
			if (checked) {
				setValues((prev) => [...prev, option]);
			} else {
				setValues((prev) => prev.filter((item) => item.id !== option.id));
			}

			onSelectOption(values);
		} else {
			if (checked) {
				setValues(() => [option]);

				onSelectOption(values);
			} else {
				setValues([]);
				onSelectOption([]);
			}
		}
	}, []);

	const handleClickAway = () => {
		setIsOpened(false);
	};

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<StyledSelectWrapper>
				<>
					<Input
						{...rest}
						readOnly
						autoFocus={isOpened}
						value={inputFieldValue}
						disableClearIcon
						onClick={() => {
							setIsOpened((prev) => !prev);
						}}
						ref={inputRef}
						rightIcon={
							<IoIosArrowDown
								cursor="pointer"
								onClick={() => {
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
