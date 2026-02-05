import React from 'react';
import { useTheme } from '@emotion/react';
import { StatusColor, StatusProps } from './interfaces';
import { StyledIndicator, StyledStatusWrapper } from './styles';

export const Status: React.FC<StatusProps> = ({
	status,
	children,
}): React.ReactElement => {
	const theme = useTheme();

	return (
		<StyledStatusWrapper>
			<StyledIndicator color={StatusColor(theme)[status]} />
			{children}
		</StyledStatusWrapper>
	);
};
