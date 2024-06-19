import styled from '@emotion/styled';

export const StyledAccordionWrapper = styled('div')`
	width: 100%;

	padding: 24px;

	background-color: white;

	cursor: pointer;

	transition: border 0.35s ease;

	border-radius: 16px;

	-webkit-box-shadow: 0px 33px 44px -18px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: 0px 33px 44px -18px rgba(34, 60, 80, 0.2);
	box-shadow: 0px 33px 44px -18px rgba(34, 60, 80, 0.2);
`;

export const StyledAccordionContent = styled('div')`
	width: 100%;

	transition: 100% 0.6s ease-in-out;
`;

export const StyledAccordionTitle = styled('div')`
	width: 100%;

	display: flex;

	flex-direction: row;

	justify-content: space-between;

	align-items: center;
`;
