import styled from '@emotion/styled';

export const FilterErrorWrapper = styled('div')`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	gap: 8px;
`;

export const FilterIconWrapper = styled('div')`
	width: 30px;
	height: 30px;

	padding: 2px;

	border-radius: 30px;

	background-color: ${(props) => props.theme.colors.primary.base};
	display: flex;
	justify-content: center;
	align-items: center;
`;
