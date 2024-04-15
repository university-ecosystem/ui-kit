import styled from '@emotion/styled';

export const StyledNavOption = styled('div')<{ selected?: boolean }>`
	padding: 12px;
	display: flex;

	gap: 8px;

	background-color: transparent;
	color: ${(props) => props.theme.colors.grey[700]};

	border-radius: 12px;

	cursor: pointer;

	${(props) => {
		if (props.selected) {
			return `
                background-color: ${props.theme.colors.primary.base};
                color: white;
            `;
		}

		return '';
	}}
`;
