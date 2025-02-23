import styled from '@emotion/styled';

export const StyledSelectWrapper = styled('div')`
	display: flex;
	flex-direction: column;

	position: relative;

	gap: 8px;

	input {
		cursor: pointer;
	}
`;

export const StyledOptionsWrapper = styled('div')`
	height: 150px;
	width: 100%;
	margin-top: 10px;

	overflow: auto;

	border-radius: 12px;
	position: absolute;

	top: 100%;

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

export const StyledBadgeContaier = styled('div')`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: 6px;
`;
