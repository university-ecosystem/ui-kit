import styled from '@emotion/styled';

export const TabsWrapperStyled = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	gap: 8px;

	overflow-x: auto;
`;

export const TabItemWrapper = styled.div<{ selected: boolean }>`
	padding: 8px 4px;
	cursor: pointer;

	transition: border-bottom 0.13s linear;

	${({ selected, theme }) =>
		selected
			? `
        border-bottom: 2px solid ${theme.colors.primary[600]};
       
    `
			: `border-bottom: 2px solid transparent;
             `}
`;
