import styled from '@emotion/styled';

export const AvatarWrapper = styled('div')`
	height: 40px;
	min-width: 40px;
	max-width: 40px;
	margin: 5px;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

	border: 3px solid ${(props) => props.theme.colors.primary['200']};

	& > img {
		width: 100%;
		height: 100%;
	}

	& > .avatar-letters {
		width: 100%;
		height: 100%;
		background-color: ${(props) => props.theme.colors.primary['200']};
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2em;

		font-family: 'Karla', sans-serif;
	}
`;
