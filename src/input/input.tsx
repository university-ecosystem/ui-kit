import React, { useCallback, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { InputProps } from './interfaces';
import { ErrorText, StyledInput, StyledInputWrapper } from './styles';

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
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					width: 'fit-content',
					gap: 8,
				}}>
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
				{Boolean(errorText) && <ErrorText>{errorText}</ErrorText>}
			</div>
		);
	}
);
