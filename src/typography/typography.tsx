import React from 'react';
import { TypographyProps } from './interfaces';
import { TypographyWrapper } from './styles';
import { ColorMap } from './constants';

export const Typography: React.FC<TypographyProps> = ({
	variant,
	color = 'base',
	children,
}): React.ReactElement => {
	const Component = variant !== 'body1' && variant !== 'body2' ? variant : 'p';
	const textColor = ColorMap[color];

	return (
		<TypographyWrapper variant={variant} textColor={textColor}>
			<Component>{children}</Component>
		</TypographyWrapper>
	);
};
