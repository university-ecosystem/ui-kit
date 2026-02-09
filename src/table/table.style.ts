import styled from '@emotion/styled';

export const TableWrapperStyled = styled.div`
	overflow-x: auto;
	overflow-y: hidden;

	display: flex;
	flex-direction: column;

	border: 1px solid ${({ theme }) => theme.colors.grey['100']};

	border-radius: 8px;

	& > * {
		flex-grow: 1;
	}
`;

export const TableHeaderWrapperStyled = styled.div`
	display: flex;

	flex-direction: row;
`;

export const TableCellStyled = styled.div`
	flex-grow: 1;
	padding: 12px 8px;

	border: 1px solid ${({ theme }) => theme.colors.grey['100']};
`;

export const TableRowStyled = styled.div`
	display: flex;
	flex-direction: row;

	width: fit-content;
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
