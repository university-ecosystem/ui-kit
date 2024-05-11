import styled from '@emotion/styled';

export const MenuWrapper = styled('div')`
	background-color: ${(props) => props.theme.colors.grey['100']};

	width: 100%;

	position: relative;
	border-radius: 12px;
`;

export const MenuChildrenWrapper = styled('div')`
	height: 100%;
	padding: 20px;

	cursor: pointer;

	border-radius: 12px;

	border: 2px solid ${(props) => props.theme.colors.grey['200']};

	:hover {
		background-color: ${(props) => props.theme.colors.grey['200']};
		transition: 0.2s ease-in-out;
	}
`;

export const MenuListWrapper = styled('ul')`
	min-width: 100%;
	position: absolute;

	display: flex;
	bottom: 100%;

	list-style: none;

	flex-direction: column;

	background-color: white;
	-webkit-box-shadow: 0px 30px 60px -20px rgba(0, 0, 0, 0.3);
	-moz-box-shadow: 0px 30px 60px -20px rgba(0, 0, 0, 0.3);
	box-shadow: 0px 30px 60px -20px rgba(0, 0, 0, 0.3);

	border-radius: 12px;

	padding: 0;

	gap: 8px;

	margin-bottom: 5px;

	> :last-child {
		border-bottom-right-radius: 12px;
		border-bottom-left-radius: 12px;
	}

	> :first-child {
		border-top-right-radius: 12px;
		border-top-left-radius: 12px;
	}
`;
