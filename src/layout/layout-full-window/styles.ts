import styled from '@emotion/styled';

export const StyledFullLayout = styled('div')<{ gridTemplate?: string }>`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	padding: 12px;

	background-color: rgba(241, 241, 241, 0.4);
`;
