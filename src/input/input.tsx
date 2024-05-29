import React, { useCallback, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { InputProps } from './interfaces';
import {
	StyledInput,
	StyledInputContainer,
	StyledInputWrapper,
} from './styles';
import { Typography } from '../typography';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			variant = 'large',
			errorText,
			rightIcon,
			disableClearIcon = false,
			baseColor = 'white',
			onChange,
			...rest
		},
		ref
	) => {
		const [inputValue, setInputValue] = useState<string | number>();

		const onClear = useCallback(() => {
			setInputValue('');
			if (onChange) onChange('');
		}, []);

		const onChangeHandler = useCallback(
			(event: React.ChangeEvent<HTMLInputElement>) => {
				setInputValue(event.target.value);
				if (onChange) onChange(event.target.value);
			},
			[]
		);

		return (
			<StyledInputContainer>
				<StyledInputWrapper
					variant={variant}
					errorText={errorText}
					baseColor={baseColor}>
					<StyledInput
						ref={ref}
						value={inputValue}
						onChange={onChangeHandler}
						{...rest}
					/>
					{Boolean(rightIcon) && <>{rightIcon}</>}
					{Boolean(inputValue && !disableClearIcon) && (
						<RxCross1 style={{ cursor: 'pointer' }} onClick={onClear} />
					)}
				</StyledInputWrapper>
				{Boolean(errorText) && (
					<Typography variant="body1" color="error">
						{errorText}
					</Typography>
				)}
			</StyledInputContainer>
		);
	}
);
