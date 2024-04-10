import styled from '@emotion/styled';
import { TypographyProps } from './interfaces';

export const TypographyWrapper = styled('div')<
	TypographyProps & {
		textColor: string;
	}
>`
	width: fit-content;

	color: ${(props) => props.textColor};

	display: flex;
	flex-wrap: wrap;

	& > h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
	}

	& > h1 {
		font-size: 48px;
		font-weight: 600;
	}

	& > h2 {
		font-size: 40px;
		font-weight: 600;
	}

	& > h3 {
		font-size: 33px;
		font-weight: 600;
	}

	& > h4 {
		font-size: 28px;
		font-weight: 600;
	}

	& > h5 {
		font-size: 23px;
		font-weight: 600;
	}

	& > h6 {
		font-size: 19px;
		font-weight: 600;
	}

	& > p {
		${(props) => {
			if (props.variant === 'body1') {
				return `
                    font-size: 16px;
                    font-weight: 300;
                `;
			}

			if (props.variant === 'body2') {
				return `
                    font-size: 13px;
                    font-weight: 300;
                `;
			}
		}}
	}
`;
