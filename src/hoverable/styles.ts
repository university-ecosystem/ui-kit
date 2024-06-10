import styled from '@emotion/styled';

export const HoverableWrapper = styled('div')`
	& > *:hover {
		-webkit-box-shadow: 0px 4px 37px 0px rgba(34, 60, 80, 0.2);
		-moz-box-shadow: 0px 4px 37px 0px rgba(34, 60, 80, 0.2);
		box-shadow: 0px 4px 37px 0px rgba(34, 60, 80, 0.2);
		cursor: pointer;
		transition: 0.1s;
	}
`;
