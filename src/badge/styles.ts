import styled from '@emotion/styled';
import { BadgeProps } from './interfaces';

export const BadgeWrapper = styled('div')<Pick<BadgeProps, 'variant'>>`
	display: flex;
	width: fit-content;
	gap: 8px;

	padding: 14px;
	border-radius: 12px;

	cursor: pointer;

	${(props) => {
		if (props.variant === 'filled')
			return `
				background-color: ${props.theme.colors.primary.base};
				color: white;

				:hover {
					background-color: ${props.theme.colors.secondary[300]};
					transition: .2s;
				}
			`;

		if (props.variant === 'outlined')
			return `
				background-color: inherit;
				border: 1px solid  ${props.theme.colors.primary.base};
				color: ${props.theme.colors.primary.base};

				:hover {
					color: white;
					background-color: ${props.theme.colors.secondary[300]};
					transition: .2s;
				}
			`;

		return '';
	}}
`;
