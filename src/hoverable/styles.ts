import styled from '@emotion/styled';

export const HoverableWrapper = styled('div')`
	width: fit-content;
	height: fit-content;

	& > *:hover {
		-webkit-box-shadow: 0px 6px 8px 0px rgba(34, 60, 80, 0.2);
		-moz-box-shadow: 0px 6px 8px 0px rgba(34, 60, 80, 0.2);
		box-shadow: 0px 6px 8px 0px rgba(34, 60, 80, 0.2);
		cursor: pointer;
		transition: 0.1s;
	}
`;
