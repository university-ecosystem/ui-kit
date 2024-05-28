import styled from '@emotion/styled';

export const StyledCardHeader = styled('div')`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 12px;
`;

export const StyledCardTextWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 4px;

	flex-grow: 1;
`;

export const StyledCardImageWrapper = styled('div')`
	width: 100%;

	min-height: 40%;

	background-color: ${(props) => props.theme.colors.primary.base};

	border-radius: 12px;
`;
