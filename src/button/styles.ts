import styled from '@emotion/styled';
import { ButtonProps } from './interfaces';

export const ButtonWrapper = styled('button')<ButtonProps>`
	border-radius: 12px;

	padding: 12px;
	height: fit-content;

	cursor: pointer;
	border: none;

	display: flex;

	justify-content: center;
	gap: 4px;

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

		return ``;
	}}

	${(props) => {
		if (props.variant === 'filled')
			return `
				background-color: ${props.theme.colors.primary.base};
				color: white;

				:hover {
					background-color: ${props.theme.colors.secondary[300]};
					transition: .2s;
				}

				:clicked {
					background-color: ${props.theme.colors.primary[500]};
					border: 1px solid white;
					transition: .2s;
				}
			`;

		if (props.variant === 'secondary')
			return `
				background-color: inherit;
				border: 1px solid  ${props.theme.colors.primary.base};
				color: ${props.theme.colors.primary.base};

				:hover {
					color: white;
					background-color: ${props.theme.colors.secondary[300]};
					transition: .2s;
				}

				:clicked {
					background-color: ${props.theme.colors.primary[500]};
					border: 1px solid white;
					color: white;
					transition: .2s;
				}
			`;

		if (props.variant === 'text')
			return `
				background-color: inherit;
				color: ${props.theme.colors.primary.base};

				:hover {
					color: white;
					background-color: ${props.theme.colors.secondary[300]};
					transition: .2s;
				}

				:clicked {
					background-color: ${props.theme.colors.primary[500]};
					border: 1px solid white;
					color: white;
					transition: .2s;
				}
			`;

		return '';
	}}
`;
