import styled from '@emotion/styled';

export const StyledIndicator = styled('div')<{ color?: string }>`
	width: 10px;
	height: 10px;
	border-radius: 10px;

	background-color: ${(props) => props.color};
`;

export const StyledStatusWrapper = styled('div')`
	display: flex;
	flex-direction: row;

	gap: 8px;

	align-items: center;
	justify-content: center;

	text-align: center;
`;
