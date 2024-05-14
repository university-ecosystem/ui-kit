import styled from '@emotion/styled';

export const StyledNavigationWrapper = styled('div')`
	width: 100%;

	height: fit-content;

	display: flex;
	flex-direction: row;

	align-items: center;

	gap: 24px;
	margin: 0;
`;

export const StyledLogoWrapper = styled('div')`
	height: fit-content;

	cursor: pointer;

	@media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
		width: fit-content;
	}
`;

export const StyledOptionsWrapper = styled('div')`
	height: fit-content;
	flex-grow: 1;

	display: flex;

	flex-direction: row;

	gap: 5px;
`;
