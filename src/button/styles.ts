import styled from '@emotion/styled';
import { ButtonProps } from './interfaces';

export const ButtonWrapper = styled('button')<ButtonProps>`
	border-radius: 12px;
	width: 350px;

	padding: 12px;

	cursor: pointer;
	border: none;

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
