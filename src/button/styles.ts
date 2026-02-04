import styled from '@emotion/styled';
import { ButtonColorValues, ButtonProps } from './interfaces';

export const ButtonWrapper = styled('button')<
	ButtonProps & {
		buttonColor: ButtonColorValues;
	}
>`
	border-radius: 8px;

	padding: 12px;
	height: fit-content;

	cursor: pointer;
	border: none;

	display: flex;

	justify-content: center;
	align-items: center;
	gap: 8px;

	${(props) => {
		if (props.size === 'default') {
			return `width: 250px;`;
		}

		if (props.size === 'small') {
			return `width: 100px;`;
		}

		if (props.size === 'large') {
			return `width: 350px;`;
		}

		if (props.size === 'fullWidth') {
			return `width: 100%;`;
		}

		return ``;
	}}

	${(props) => {
		if (props.variant === 'filled')
			return `
				background-color: ${props.buttonColor.base};
				color: white;

				:hover {
					background-color: ${props.buttonColor.hover};
					transition: .2s;
				}

				:clicked {
					background-color: ${props.buttonColor.clicked};
					border: 1px solid white;
					transition: .2s;
				}
			`;

		if (props.variant === 'secondary')
			return `
				background-color: inherit;
				border: 1px solid  ${props.buttonColor.base};
				color: ${props.buttonColor.base};

				:hover {
					color: white;
					background-color: ${props.buttonColor.hover};
					transition: .2s;
				}

				:clicked {
					background-color: ${props.buttonColor.clicked};
					border: 1px solid white;
					color: white;
					transition: .2s;
				}
			`;

		if (props.variant === 'text')
			return `
				background-color: inherit;
				color: ${props.buttonColor.base};

				:hover {
					color: white;
					background-color: ${props.buttonColor.hover}};
					transition: .2s;
				}

				:clicked {
					background-color: ${props.buttonColor.clicked};
					border: 1px solid white;
					color: white;
					transition: .2s;
				}
			`;

		return '';
	}}
`;
