import styled from '@emotion/styled';

export const StyledCardWrapper = styled('div')`
	width: 250px;
	height: 400px;

	display: flex;
	flex-direction: column;

	hr.solid {
		border-top: 3px solid #bbb;
	}

	border-radius: 12px;
	border: 0.5px solid rgba(163, 163, 168, 0.5);
	background-color: white;

	-webkit-box-shadow: 0px 6px 8px 0px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: 0px 6px 8px 0px rgba(34, 60, 80, 0.2);
	box-shadow: 0px 6px 8px 0px rgba(34, 60, 80, 0.2);

	padding: 12px;

	gap: 12px;

	@media screen and (max-width: ${(props) => props.theme.breakPoints.laptop}) {
		width: 100%;
	}
`;
