import React from 'react';
import { TextProps } from './interfaces';
import { TextWrapper } from './styles';
import { ColorMap } from './constants';

export const Text: React.FC<TextProps> = ({
	variant = 'body1',
	color = 'base',
	textAlign = 'start',
	bold = false,
	children,
}): React.ReactElement => {
	const Component = variant !== 'body1' && variant !== 'body2' ? variant : 'p';
	const textColor = ColorMap[color];

	return (
		<TextWrapper
			textAlign={textAlign}
			variant={variant}
			textColor={textColor}
			bold={bold}>
			<Component>{children}</Component>
		</TextWrapper>
	);
};
