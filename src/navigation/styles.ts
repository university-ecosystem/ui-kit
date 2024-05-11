import styled from '@emotion/styled';

export const StyledNavigationWrapper = styled('div')`
	height: 100%;

	display: flex;
	flex-direction: column;

	gap: 12px;
	margin: 0;

	padding-top: 12px;

	border-right: 0.5px solid ${(props) => props.theme.colors.grey[200]};
`;

export const StyledLogoWrapper = styled('div')`
	width: 100%;

	padding-bottom: 12px;

	cursor: pointer;
`;

export const StyledOptionsWrapper = styled('div')`
	width: 100%;
	flex-grow: 1;

	display: flex;

	flex-direction: column;

	gap: 5px;
`;
