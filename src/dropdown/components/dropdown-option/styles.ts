import styled from '@emotion/styled';

export const StyledDropdownOption = styled('div')<{ selected: boolean }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-left: 10px;
	padding-right: 10px;
	padding-top: 12px;

	cursor: pointer;

	${(props) => {
		if (props.selected) {
			return `
                background-color: ${props.theme.colors.grey[100]};
                font-weight: 600;
            `;
		}
	}}
`;

export const StyledDropdownOptionContent = styled('div')`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	padding-bottom: 12px;
	border-bottom: 1px solid ${(props) => props.theme.colors.grey[200]};
`;
