import styled from '@emotion/styled';

export const StyledFullLayout = styled('div')<{ gridTemplate?: string }>`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	gap: 12px;
`;
