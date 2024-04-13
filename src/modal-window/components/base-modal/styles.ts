import styled from '@emotion/styled';

export const BaseModalContainer = styled('div')`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	display: flex;

	align-items: center;
	justify-content: center;
`;

export const BaseModalBackdrop = styled('div')`
	width: 100%;
	height: 100%;

	top: 0;
	left: 0;

	position: absolute;

	background-color: black;
	z-index: 1;
	opacity: 80%;
`;

export const BaseModalWrapper = styled('div')`
	width: 500px;
	height: 400px;

	background-color: white;

	display: flex;
	flex-direction: column;

	padding: 12px;
	border-radius: 12px;

	opacity: 100% !important;
	z-index: 1000;
`;
