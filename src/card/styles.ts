import styled from '@emotion/styled';

export const StyledCardWrapper = styled('div')`
	width: 400px;
	height: fit-content;

	display: flex;
	flex-direction: column;

	hr.solid {
		border-top: 3px solid #bbb;
	}

	border-radius: 12px;
	border: 0.5px solid ${(props) => props.theme.colors.grey[100]};

	padding: 12px;

	gap: 12px;
`;
