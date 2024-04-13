import styled from '@emotion/styled';
import { BadgeColorValues, BadgeProps } from './interfaces';

export const BadgeWrapper = styled('div')<
	Pick<BadgeProps, 'variant'> & { badgeColor: BadgeColorValues }
>`
	display: flex;
	width: fit-content;
	gap: 8px;

	padding: 5px 10px;
	border-radius: 8px;

	cursor: pointer;

	${(props) => {
		if (props.variant === 'filled')
			return `
				background-color: ${props.badgeColor.base};
				color: white;

				:hover {
					background-color: ${props.badgeColor.hover};
					transition: .2s;
				}
			`;

		if (props.variant === 'outlined')
			return `
				background-color: inherit;
				border: 1px solid  ${props.badgeColor.base};
				color: ${props.badgeColor.base};

				:hover {
					color: white;
					background-color: ${props.badgeColor.hover};
					transition: .2s;
				}
			`;

		return '';
	}}
`;
