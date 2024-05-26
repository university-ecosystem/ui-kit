import styled from '@emotion/styled';

export const StyledNavigationWrapper = styled('div')`
	width: 100%;

	height: fit-content;

	display: flex;
	flex-direction: row;

	align-items: center;

	position: sticky;
	top: 0;

	-webkit-box-shadow: 0px 10px 13px -1px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: 0px 10px 13px -1px rgba(34, 60, 80, 0.2);
	box-shadow: 0px 10px 13px -1px rgba(34, 60, 80, 0.2);

	padding: 12px 12px;

	//border-radius: 12px;

	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;

	z-index: 10000;

	gap: 24px;
	margin: 0;

	background-color: white;
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
