import styled from '@emotion/styled';

export const StyledNavOption = styled('div')<{ selected?: boolean }>`
	height: fit-content;
	padding: 12px;
	display: flex;

	gap: 8px;

	background-color: transparent;
	color: ${(props) => props.theme.colors.grey[700]};

	cursor: pointer;

	border-bottom: 3px solid transparent;

	//eslint-ignore
	/* prettier-ignore */
	@media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
		width: fit-content;
		p, h1, h2, h3, h4, h5, h6 {
			display: none;
			color: white;
		}
	}

	${(props) => {
		if (props.selected) {
			return `
				
				border-color: ${props.theme.colors.primary.base};
                color: ${props.theme.colors.primary.base};
				font-weight: 600;
            `;
		}
		return '';
	}}
`;
