import styled from '@emotion/styled';

export const StyledCardWrapper = styled('div')`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;

	hr.solid {
		border-top: 3px solid #bbb;
	}

	border-radius: 12px;
	border: 0.5px solid rgba(163, 163, 168, 0.5);
	background-color: white;

	padding: 12px;

	gap: 12px;
`;
