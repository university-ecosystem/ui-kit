import styled from '@emotion/styled';
import { InputProps } from './interfaces';

export const StyledInputContainer = styled('div')`
	display: flex;
	flex-direction: column;
	width: fit-content;
	gap: 8px;
`;

export const StyledInputWrapper = styled('div')<
	Pick<InputProps, 'variant' | 'errorText'>
>`
	width: ${(props) => {
		switch (props.variant) {
			case 'large':
				return '230px';
			case 'default':
				return '190px';
			case 'small':
				return '150px';
			case undefined:
			default:
				return '230px';
		}
	}};
	padding: 12px;

	border: 2px solid ${(props) => props.theme.colors.grey[600]};
	border-radius: 8px;
	background-color: ${(props) => props.theme.colors.grey[100]};

	display: flex;
	align-items: center;

	${(props) => {
		if (props.errorText) {
			return `
                border: 2px solid ${props.theme.colors.error.base};
            `;
		}

		return '';
	}}

	:focus-within {
		transition: 0.1s;
		border: 2px solid ${(props) => props.theme.colors.primary[300]};
	}
`;

export const StyledInput = styled('input')`
	width: 100%;
	height: 100%;

	border: none;
	background-color: inherit;

	::placeholder {
		color: ${(props) => props.theme.colors.grey[400]};
	}

	:active,
	:hover,
	:focus {
		outline: 0;
		outline-offset: 0;
	}
`;
