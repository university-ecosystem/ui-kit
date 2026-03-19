import styled from '@emotion/styled';

export const TableWrapperStyled = styled.table`
	overflow-x: auto;

	border-collapse: separate;
	border-spacing: 0;

	border-radius: 8px;

	& > thead > tr:first-child > th:first-child {
		border-top-left-radius: 8px;
	}

	& > thead > tr:last-child > th:last-child {
		border-top-right-radius: 8px;
	}

	& > tbody > tr:last-child > th:first-child {
		border-bottom-left-radius: 8px;
	}

	& > tbody > tr:last-child > th:last-child {
		border-bottom-right-radius: 8px;
	}
`;

export const TableHeaderWrapperStyled = styled.thead``;

export const TableCellStyled = styled.th<{ isHeader?: boolean }>`
	padding: 24px;

	${({ isHeader, theme }) =>
		isHeader
			? `
			background-color: ${theme.colors.grey['100']};
			border: 1px solid ${theme.colors.grey['200']};
		
	`
			: `
			border: 1px solid ${theme.colors.grey['100']};
			cursor: pointer;
			:hover {
				background-color: ${theme.colors.primary['100']};
			}
	`}
`;

export const TableRowStyled = styled.tr`
	border: 1px solid ${({ theme }) => theme.colors.grey['200']};
`;

export const TableColumnStyled = styled.div`
	width: fit-content;

	display: flex;
	flex-direction: column;
`;

export const TableContentStyled = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;

	overflow-y: auto;
`;
