import styled from '@emotion/styled';

export const StyledSelectWrapper = styled('div')`
	display: flex;
	flex-direction: column;

	gap: 8px;

	input {
		cursor: pointer;
	}
`;

export const StyledOptionsWrapper = styled('div')`
	height: 100px;
	width: 100%;

	overflow: auto;

	border-radius: 12px;

	-webkit-box-shadow: 0px 30px 60px -20px rgba(0, 0, 0, 0.3);
	-moz-box-shadow: 0px 30px 60px -20px rgba(0, 0, 0, 0.3);
	box-shadow: 0px 30px 60px -20px rgba(0, 0, 0, 0.3);

	background-color: white;

	display: flex;
	flex-direction: column;

	::-webkit-scrollbar {
		display: none;
	}
`;
