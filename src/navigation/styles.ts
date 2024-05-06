import styled from '@emotion/styled';

export const StyledNavigationWrapper = styled('div')`
	height: 100%;

	display: flex;
	flex-direction: column;

	gap: 12px;
	margin: 0;

	padding: 12px;

	border-right: 0.5px solid ${(props) => props.theme.colors.grey[200]};
`;

export const StyledLogoWrapper = styled('div')`
	width: 100%;

	border-bottom: 0.5px solid ${(props) => props.theme.colors.grey[200]};

	padding-bottom: 12px;

	cursor: pointer;

	//eslint-ignore
	/* prettier-ignore */
	@media only screen and 
	(max-width: ${(props) => props.theme.breakPoints.mobile}) {
		font-size-adjust: 60% !important;
	}

	//eslint-ignore
	/* prettier-ignore */
	@media only screen and 
	(max-width: ${(props) => props.theme.breakPoints.tablet}) {
		font-size-adjust: 80% !important;
	}
`;

export const StyledOptionsWrapper = styled('div')`
	width: 100%;
	flex-grow: 1;

	display: flex;

	flex-direction: column;

	gap: 5px;
`;
