import styled from '@emotion/styled';

export const MenuOptionWrapper = styled('li')`
	padding: 24px;
	/* /padding: 0; */
	margin: 0;

	display: flex;

	cursor: pointer;

	gap: 8px;

	:hover {
		background-color: ${(props) => props.theme.colors.grey['100']};
	}
`;
