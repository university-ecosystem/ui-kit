import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { InputProps } from './interfaces';
import { ErrorText, StyledInput, StyledInputWrapper } from './styles';

export const Input: React.FC<InputProps> = ({
	variant = 'large',
	errorText,
	value,
	onClear,
	...rest
}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: 'fit-content',
				gap: 8,
			}}>
			<StyledInputWrapper variant={variant} errorText={errorText}>
				<StyledInput value={value} {...rest} />
				{Boolean(value) && (
					<RxCross1 style={{ cursor: 'pointer' }} onClick={onClear} />
				)}
			</StyledInputWrapper>
			{Boolean(errorText) && <ErrorText>{errorText}</ErrorText>}
		</div>
	);
};
