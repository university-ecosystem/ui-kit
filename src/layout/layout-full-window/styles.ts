import styled from '@emotion/styled';

export const StyledFullLayout = styled('div')<{ gridTemplate?: string }>`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: ${(props) => props.gridTemplate ?? '20% 80%;'};
`;
