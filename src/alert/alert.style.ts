import styled from '@emotion/styled';
import { AlertProps } from './interfaces';

export const WrapperStyled = styled.div<Pick<AlertProps, 'color'>>`
	width: 100%;

	padding: 16px 12px;
	border-radius: 8px;

	display: flex;
	flex-direction: column;

	gap: 12px;

	background-color: ${({ color, theme }) => {
		switch (color) {
			case 'info':
				return theme.colors.primary['100'];
			case 'success':
				return theme.colors.quaternary['400'];
			case 'error':
				return theme.colors.error.base;
			case 'warning':
				return theme.colors.contrast.base;
			default:
				return theme.colors.primary['100'];
		}
	}};
`;

export const HeaderWrapperStyled = styled.div`
	display: flex;

	justify-content: space-between;
	align-items: center;
`;
