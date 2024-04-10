import React, { useCallback, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { InputProps } from './interfaces';
import {
	StyledInput,
	StyledInputContainer,
	StyledInputWrapper,
} from './styles';
import { Typography } from '../typography';

export const Input: React.FC<InputProps> = React.memo(
	({ variant = 'large', errorText, onChange, ...rest }) => {
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
				<StyledInputWrapper variant={variant} errorText={errorText}>
					<StyledInput
						value={inputValue}
						onChange={onChangeHandler}
						{...rest}
					/>
					{Boolean(inputValue) && (
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
